# Creatella React Native Test Project
This is a test project that was defined by Creatella team with specified features.

### Improvements That was not implemented for various reasons (such as prevention of complexity):
1. eslint/prettier.
2. adding a more dynamic way for handling loading and errors etc.
3. localization
4. Theme
5. using third party libs for better UI/Performance/...

## Running the Projects
1. `yarn install`
2. run the backend project
    ### IOS
    3. `cd ios`
    4. `pod install`
    5. `cd .. `
    6. `react-native run-ios`
    ### Android
    3. open `src/config/routes.ts`
    4. change `localhost` to your ip address
    5. `react-native run-android`
