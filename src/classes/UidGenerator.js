
class UidHolder {
    constructor() {
        this.uidList = [];
    }
    generateRandomUid(uidLength) {
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var uid = "";
        for (var i = 0; i < uidLength; i++) {
            uid += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return uid;
    }
    createUid(uidLength) {
        var uid = "";
        while (uid != "" && this.uidList.findIndex(uid) != -1) {
            uid = this.generateRandomUid(uidLength);
        }
        this.uidList.push(uid);
        return uid;
    }
    deleteUid(uid) {
        this.uidList.splice(this.uidList.findIndex(uid), 1);
        return;
    }
    refreshUid(oldUid, uidLength) {
        this.deleteUid(oldUid);
        return this.createUid(uidLength);
    }
}

const uidGenerator = new UidHolder();

export { uidGenerator };
