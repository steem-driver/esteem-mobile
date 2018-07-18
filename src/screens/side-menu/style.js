const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  drawerCover: {
    alignSelf: "stretch",
    height: deviceHeight / 4,
    width: null,
    position: "relative",
    marginBottom: 10
  },
  drawerImage: {
    position: "absolute",
    left: Platform.OS === "android" ? deviceWidth / 10 : deviceWidth / 30,
    top: Platform.OS === "android" ? deviceHeight / 13 : deviceHeight / 20,
    width: 60,
    height: 60,
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 30,
  },
  text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 16,
    marginLeft: 20
  },
  badgeText: {
    fontSize: Platform.OS === "ios" ? 13 : 11,
    fontWeight: "400",
    textAlign: "center",
    marginTop: Platform.OS === "android" ? -3 : undefined
  },
  info: {
    position: 'absolute',
    top: Platform.OS === "android" ? deviceHeight / 13 : deviceHeight / 6,
    left: Platform.OS === "android" ? deviceWidth / 10 : deviceWidth / 40,

  }, 
  userLabel: {
    fontWeight: 'bold',
    color: 'white'
  }
};
