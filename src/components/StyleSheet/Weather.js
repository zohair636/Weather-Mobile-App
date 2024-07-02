import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  weatherBgContainer: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  weatherSetting: {
    justifyContent: "center",
    alignItems: "center",
  },
  textInputSetting: {
    borderColor: "#FFB200",
    borderWidth: height * 0.001,
    padding: height * 0.007,
    borderRadius: height * 1,
    width: width * 0.5,
    backgroundColor: "#005C97",
    color: "#fff",
    margin: height * 0.01,
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  submitBtn: {
    backgroundColor: "#FFB200",
    padding: height * 0.007,
    borderRadius: height * 1,
    width: width * 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  submitBtnTxt: {
    color: "#fff",
    fontWeight: "500",
  },
  mapIcon: {
    margin: height * 0.01,
    paddingTop: height * 0.05
  },
  cityNameTxt: {
    color: "#FFFFFF",
    fontSize: height * 0.03,
    fontWeight: "bold",
    textAlign: "center",
    margin: height * 0.01,
  },
  temperatureTxt: {
    color: "#FFFFFF",
    fontSize: height * 0.15,
    fontWeight: "bold",
    marginTop: height * 0.05,
  },
  weatherTxt: {
    color: "#FFFFFF",
    fontSize: height * 0.025,
    fontWeight: "bold",
  },
  countryTxt: {
    color: "#FFFFFF",
    fontWeight: "500",
  },
  humidity_UV_Setting: {
    flexDirection: "row",
    margin: height * 0.01,
    borderRadius: height * 1,
    //width: width * 0.3,
    justifyContent: "jus",
    alignItems: "center",
    flex: 1
  },
  humidity_UV_Txt: {
    color: "#FFFFFF",
    fontSize: height * 0.015
  },
  cloudsSetting: {
    borderColor: "#2E86C1",
    borderWidth: height * 0.001,
    padding: height * 0.01,
    borderRadius: height * 1,
    width: width * 0.25,
    height: height * 0.25,
    margin: height * 0.01,
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#85C1E9",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    //flex: 1
  },
  cloudDataTxt: {
    color: "#fff",
    fontSize: height * 0.017,
    fontWeight: "500",
    margin: height * 0.01,
  },
  endLine: {
    borderBottomColor: "#2E86C1",
    borderBottomWidth: height * 0.001,
    margin: height * 0.01,
    elevation: 10,
    width: width * 0.9
  },
});

export default styles;
