#npx react-native init $ProjectName$

# Change gradle 8.6 to 8.5 (((( Always use Gradle 8.5 for Now ))))


# Download The Necessary Libraries
npm install --save-dev babel-plugin-react-native-web webpack webpack-cli webpack-dev-server html-webpack-plugin react-dom babel-loader url-loader @svgr/webpack ajv --legacy-peer-deps

# Download React Native Web

npm install --save react react-dom react-native-web --legacy-peer-deps

# It seems that Webpack couldn't load the TypeScript immediately, so you need to install these packages:
npm install --save-dev typescript ts-loader @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-loader webpack webpack-cli webpack-dev-server


$uri = "https://gist.github.com/arrygoo/81d95ecc55313a7d0668f6711cfc7ff9/download"
$downloadPath = "$env:TEMP\archive.tar.gz"
$extractPath = "."

# Download the file
Invoke-WebRequest -Uri $uri -OutFile $downloadPath

# Extract the file
tar.exe -xvzf $downloadPath -C $extractPath
