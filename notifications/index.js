import { Permissions, Notifications } from 'expo'
import { db, auth } from '../firebase'

export const registerForPushNotificationAsync = async () => {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  )
  let finalStatus = existingStatus

  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
    finalStatus = status
  }

  if (finalStatus !== 'granted') {
    return
  }

  let token = await Notifications.getExpoPushTokenAsync()

  const userId = await auth.currentUser.uid

  db.collection("tokens").doc(userId).set({
    token: token,
  })
    .then(function() {
      console.warn("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
}
