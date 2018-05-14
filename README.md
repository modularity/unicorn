# unicorn

## Unicorn app installation

### init the React Native framework
react-native init unicorn

### configure repo
cd unicorn 
git clone https://github.com/modularity/unicorn.git
cp -r unicorn/* .

### configure project dependencies
npm install && react-native link

### run iOS project
Run in Xcode or commandline with react-native run-ios in project root

### run android project
Start emulator or connect physical device first, then run: react-native run-android

Alternatively, start a RN packager first: react-native start 
Then run the project with Android Studio
