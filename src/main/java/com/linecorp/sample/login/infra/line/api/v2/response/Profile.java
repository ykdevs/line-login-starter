package com.linecorp.sample.login.infra.line.api.v2.response;

public final class Profile {

    public final String userId;
    public final String displayName;
    public final String pictureUrl;
    public final String statusMessage;

    public Profile(String userId, String displayName, String pictureUrl, String statusMessage) {
        this.userId = userId;
        this.displayName = displayName;
        this.pictureUrl = pictureUrl;
        this.statusMessage = statusMessage;
    }

}
