package com.sensoryex.backend.config;

import org.springframework.stereotype.Service;

/**
 * Created by Arthur on 2016-09-01.
 */


@Service
public class TokenHandlerService {


    public String tokenCurrent;

    public String tokentest ="99";

    public String getTokenCurrent() {
        return tokenCurrent;
    }

    public void setTokenCurrent(String tokenCurrent) {
        this.tokenCurrent = tokenCurrent;
    }

    public String getTokentest() {
        return tokentest;
    }

    public void setTokentest(String tokentest) {
        this.tokentest = tokentest;
    }
}
