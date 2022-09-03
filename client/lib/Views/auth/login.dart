import 'package:agri_doc/Views/auth/signup.dart';
import 'package:agri_doc/themes/colors.dart';
import 'package:agri_doc/themes/darktheme.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class LoginPage extends StatelessWidget {
  LoginPage({Key? key}) : super(key: key);
  RxBool showpass = true.obs;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: SingleChildScrollView(
            child: Column(
          children: [
            Align(
              alignment: Alignment.topRight,
              child: SizedBox(
                width: MediaQuery.of(context).size.width * 0.6,
                height: MediaQuery.of(context).size.height * 0.27,
                child: Image.asset(
                  'assets/images/loginpagedesign.png',
                  fit: BoxFit.fill,
                ),
              ),
            ),
            const SizedBox(
              height: 20,
            ),
            Text(
              "AgriDoc",
              style: TextStyle(
                fontSize: 26,
                fontWeight: FontWeight.w500,
                color: Theme.of(context).primaryColorLight,
              ),
            ),
            Container(
              margin: const EdgeInsets.symmetric(vertical: 10, horizontal: 20),
              child: TextFormField(
                keyboardType: TextInputType.emailAddress,
                controller: null,
                decoration: const InputDecoration(
                  prefixIcon: Icon(
                    Icons.email,
                    size: 20,
                  ),
                  label: Text("Email"),
                ),
              ),
            ),
            Obx(
              () => Container(
                margin:
                    const EdgeInsets.symmetric(vertical: 10, horizontal: 20),
                child: TextFormField(
                  keyboardType: TextInputType.visiblePassword,
                  obscureText: showpass.value,
                  controller: null,
                  decoration: InputDecoration(
                    prefixIcon: const Icon(
                      Icons.email,
                      size: 20,
                    ),
                    suffix: GestureDetector(
                      onTap: () {
                        showpass.value = !showpass.value;
                      },
                      child: Icon(
                        showpass.value
                            ? Icons.visibility_off
                            : Icons.visibility,
                        color: Colors.grey,
                        size: 20,
                      ),
                    ),
                    label: const Text("Password"),
                  ),
                ),
              ),
            ),
            const SizedBox(
              height: 20,
            ),
            ElevatedButton(
              onPressed: () {
                Get.changeTheme(myThemeDark);
              },
              style: ElevatedButton.styleFrom(
                  minimumSize: const Size(200, 50),
                  maximumSize: const Size(400, 50)),
              child: const Text(
                "Login",
                style: TextStyle(fontSize: 16),
              ),
            ),
            const SizedBox(
              height: 20,
            ),
            Container(
              margin: const EdgeInsets.only(right: 20),
              child: Align(
                alignment: Alignment.topRight,
                child: Text(
                  "Forgot Password ?",
                  style: TextStyle(
                    color: Theme.of(context).primaryColorLight,
                  ),
                ),
              ),
            ),
            SizedBox(
              height: 20,
            ),
            RichText(
                text: TextSpan(
              style: TextStyle(
                  fontSize: 16,
                  color: Theme.of(context).textTheme.caption!.color),
              children: [
                WidgetSpan(
                  child: GestureDetector(
                    onTap: () => Get.off(() => SignUpPage()),
                    child: Text(
                      "  SignUp",
                      style:
                          TextStyle(color: Theme.of(context).primaryColorLight),
                    ),
                  ),
                )
              ],
              text: "Don't have an Account ?",
            ))
          ],
        )),
      ),
    );
  }
}
