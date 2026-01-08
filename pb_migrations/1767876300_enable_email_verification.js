/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("_pb_users_auth_");

    // Enable email verification requirement
    collection.options.requireEmail = true;

    // Ensure verification template has sensible defaults if not set
    if (!collection.verificationTemplate || !collection.verificationTemplate.subject) {
        collection.verificationTemplate = {
            subject: "Verify your email for {APP_NAME}",
            body: `<p>Hello,</p>
<p>Click on the button below to verify your email address.</p>
<p>
  <a class="btn" href="{ACTION_URL}" target="_blank" rel="noopener">Verify</a>
</p>
<p>
  If you did not request this verification, you can ignore this email.
</p>
<p>
  Thanks,<br/>
  {APP_NAME} team
</p>`,
            actionUrl: "{APP_URL}/_/#/auth/confirm-verification/{TOKEN}"
        };
    }

    return dao.saveCollection(collection);
}, (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId("_pb_users_auth_");

    // Revert: disable email verification requirement
    collection.options.requireEmail = false;

    return dao.saveCollection(collection);
});
