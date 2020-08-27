# fire-form-functions

Cloud functions for [fire-form](https://github.com/WombatTechnology/fire-form)

To use this repo, you need to setup fire-form.

Currently available

* Notify Slack when contact form submitted

## Prerequisites
✅ Create incoming web hook of slack. Detail [here](https://api.slack.com/messaging/webhooks)

✅ Make firebase project to Blaze. (It’s necessary for deploy cloud function)

✅ Login your fire base account with firebase login command.

```
$ firebase login
```

## Notify Slack contact form submitted
Set your Firebase project ID in .firebaserc

```json
{
  "projects": {
    "default": "your_project_id_here"
  }
}
```

2. Then set slack incoming web hook url in index.ts

```
const webhook = new IncomingWebhook("https://hooks.slack.com/services/your_web_hook_url"); 
```

3. Deploy functions

```
firebase deploy
```

![image](https://user-images.githubusercontent.com/6919381/91386958-1a640d80-e86f-11ea-8f1e-891dc9e757e3.png)

That’s all!
Check a message send to the channel.
