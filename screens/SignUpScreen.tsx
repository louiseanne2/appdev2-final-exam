import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

import Ionicons from "@react-native-vector-icons/ionicons";

export default function SignUpScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      
      {/* 1. Header Section */}
      <View style={styles.header}>
        <Image
          source={require("../assets/signup.webp")}
          style={styles.image}
        />
      </View>

      {/* 2. Form Section */}
      <View style={styles.formContainer}>
        
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} placeholder="John Doe" />

        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="********"
          style={styles.input}
          secureTextEntry={true}
        />

        {/* ✅ SIGN UP BUTTON (now works) */}
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => {
            console.log("Signing up...");
            navigation.replace("Todo"); // or navigate("Login")
          }}
        >
          <Text style={styles.signUpButtonText}>
            Sign Up
          </Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or</Text>

        {/* Social buttons */}
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialIcon}>
            <Ionicons name="logo-google" size={30} color="#DB4437" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialIcon}>
            <Ionicons name="logo-facebook" size={30} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialIcon}>
            <Ionicons name="logo-facebook" size={30} color="#4267B2" />
          </TouchableOpacity>
        </View>

        {/* ✅ FOOTER NAVIGATION FIXED */}
        <View style={styles.footer}>
          <Text>Already have an account?</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.linkText}>Login</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7D7AFF',
        paddingTop: 40
    },
    header: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    image: {
        width: '80%',
        height: '70%'
    },
    formContainer: {
        flex: 2,
        backgroundColor: '#FFF',
        padding:30,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60
    },
    label: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
        marginTop: 15
    },
    input: {
        backgroundColor: '#F0F0F0',
        padding: 15,
        borderRadius: 15,
        fontSize: 16
    },
    forgotText: {
        textAlign: 'right',
        marginTop: 10,
        color: '#666'
    },
    signUpButton: {
        backgroundColor: '#FFCC00',
        padding: 18,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 30
    },
    signUpButtonText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    orText: {
        textAlign: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        fontSize: 18,
        fontWeight: 'bold'
    },
    socialRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        rowGap: 20
    },
    socialIcon: {
        backgroundColor: '#F0F0F0',
        padding: 15,
        borderRadius: 15
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    linkText: {
        color: '#FFCC00',
        fontWeight: 'bold'
    },
    loginButtonText: {
        fontWeight: 'bold',
        fontSize: 18
    }

});