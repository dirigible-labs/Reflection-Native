# Reflection-Native


### TODO
- add settings screen with logout button, info about currently logged in user
- add hamburger menu to allow switching between 3 screens: settings, data overview, and data entry, maybe use https://github.com/react-native-fellowship/react-native-side-menu


# Screens
## 1. Login Screen /

## 2. Entry Screen
Default when user is already logged in

Displays 4 buttons. When any button is hit:

1. spinner displays over button,
2. event is fired to backend
3. on success button releases to normal state again
4. success message is displayed to user

## 3. Data review screen

Shows historic data for user entry. Values displayed are:

1. Current week data entry history overlaying previous week
2. aggregate of all previous weeks
3. Other things TK


## 4. Settings page

2. which day of the week to start on
1. logout


