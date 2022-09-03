import 'package:agri_doc/Views/auth/login.dart';
import 'package:agri_doc/Views/auth/signup.dart';
import 'package:agri_doc/themes/darktheme.dart';
import 'package:flutter/material.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:agri_doc/themes/theme.dart';

import 'package:get/get_navigation/get_navigation.dart';

void main() {
  runApp(AgriDocApp());
}

class AgriDocApp extends StatefulWidget {
  AgriDocApp({Key? key}) : super(key: key);

  @override
  State<AgriDocApp> createState() => _AgriDocAppState();
}

class _AgriDocAppState extends State<AgriDocApp> {
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      theme: myTheme,
      home: Scaffold(
        body: Container(
          // height: MediaQuery.of(context).size.height,
          width: double.infinity,
          decoration: const BoxDecoration(
            image: DecorationImage(
                fit: BoxFit.cover,
                image: AssetImage('assets/images/leaf photo home sceen.png')),
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
              ElevatedButton(
                onPressed: () {
                  Get.to(() => SignUpPage());
                },
                style: ElevatedButton.styleFrom(
                    minimumSize: const Size(200, 50),
                    maximumSize: const Size(400, 50)),
                child: const Text(
                  "Signup",
                  style: TextStyle(fontSize: 20),
                ),
              ),
              const SizedBox(
                height: 20,
              ),
              ElevatedButton(
                onPressed: () {
                  Get.to(() => LoginPage());
                },
                style: ElevatedButton.styleFrom(
                    minimumSize: const Size(200, 50),
                    maximumSize: const Size(400, 50)),
                child: const Text(
                  "Login",
                  style: TextStyle(fontSize: 20),
                ),
              ),
              const SizedBox(
                height: 30,
              )
            ],
          ),
        ),
      ),
    );
  }
}
