## Interactive Features That I have Implemented

### 1. Textarea Adjusting its height automatically based on its Content

- Textarea now will automatically adjust its height based on the content that is in it. Users should experience the height of the textarea to automatically increase once the text within it fills its full width, and decrease once the user deletes lines of text.

### 2. User Can Adjust the Color Theme of the App

- Users can choose among three different options: system, light, dark, and they should observe the change in the color theme of the app. The cool thing about this feature is that the app listens to system level changes. So whenever the user changes the system level theme to dark or anything else than dark, they should observe the color theme changing on the app instantaneously.

### 3. User Can Adjust the Font Size and the Font Family

- User has 3 options for each selection. Responsivity of the app continues to look good in either combination of settings.

<br/><br/>

_I have used local storage to keep the settings selection active through visits until the user clears it. However, I did not add a listener to the storage so if a user has multiple active sessions on the same browser account, updates on one side will be updated on the other until any page gets reloaded. I read MDN web docs on how to add a listener to the storage, but the reason I did not implement it was because I consider local storage as a temporary tool/solution until we connect the app to a database. Once we have the database I will be resolving this bug._

<br/>

### References (This part is from previous work not related to Unit4 Lab)

- Google Icons reference link: https://fonts.google.com/icons?icon.size=24&icon.color=%235f6368
