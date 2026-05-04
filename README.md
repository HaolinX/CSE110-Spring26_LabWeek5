# Lab 5 - Jayden Xie

## GitHub Pages Links
- Expose: https://haolinx.github.io/CSE110-Spring26_LabWeek5/expose.html

- Explore: https://haolinx.github.io/CSE110-Spring26_LabWeek5/explore.html

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   
    No. Because sending a message involves lots of parts like: input message, sent message, receives message, etc. A unit test only tests one small piece of code by itself.


2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
   
    Yes. Because it just checking if the text is more than 80 characters, and it does not depend on other parts.