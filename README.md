# sodium_chloride



> A salt is similar in concept to the secret key in our HMAC in that it mixes in with our hash to create a different hash. However, the purpose of a salt differs. A salt simply adds uniqueness to the hash and it doesn't need to be protected as a secret. A strong approach is to make each salt unique to the hash being generated, storing it alongside the hash. If each hash in a database is generated from a different salt, an attacker is forced to generate a rainbow table for each hash based on its salt rather than the entire database. 


### Installation

```sh
$ sodium_chloride '<enter_password_to_generate_salt>'
```

## Screenshots

**console**

![Alt text](/screenshots/screenshot.PNG?raw=true)

---





 




