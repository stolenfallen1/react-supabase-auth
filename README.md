# React app user authentication with OAuth integration using supabase

A simple user authentication setup for your React app using your favorite OAuth service providers.

### Description:
Get started quickly with basic user authentication in your React applications. This template integrates seamlessly with well-known OAuth service providers, allowing users to sign in securely using their preferred accounts. Additionally, you can easily implement custom hook middleware to protect routes from unauthorized access, ensuring a smooth and secure user experience. Simplify your authentication workflow and focus on building your application with confidence.

Authenticating with Facebook

-   First set-up your supabase project
-   After creating your project make sure to save your supabase URL and supabase anon key, cause we will be using that later.
-   Then navigate in the authentications page in the sidebar then choose facebook
-   Then type in all the credentials needed. But where can I get all this credentials? Read further down below for instructions.

Example:
![](/src/assets/screenshots/SC1.png)

-   First go to meta's / facebook developer website: https://developers.facebook.com
-   If you don't have an account please do register
-   After registering go to "My Apps" and Create one
-   After creating your app go to "App Settings" which is located in the sidebar then click "Basic"
-   Right there you can see your Client ID / App ID and Client Secret / App Secret

Example:
![](/src/assets/screenshots/SC2.png)

-   Paste that in to the facebook authentication provider
-   Then copy the URL callback for OAuth that supabase provided
-   Go back to your meta project and on the sidebar you can see "use cases"
-   Find "Authentication and account creation" then click the customize button
-   Press the "Go to Settings" button and paste the callback url that supabase provides to the "Valid OAuth Redirect URIs" then hit save.
-   And lastly under the permissions the email and public_profile status should be set to "Ready for testing", if not please do add.

For more detailed explanation go visit the docs that supabase provides:
https://supabase.com/docs/guides/auth/social-login/auth-facebook

-   After getting set-up create an ENV file then paste your supabase URL and supabase anon key
-   And that's it test and configure the code base on your liking! :>
