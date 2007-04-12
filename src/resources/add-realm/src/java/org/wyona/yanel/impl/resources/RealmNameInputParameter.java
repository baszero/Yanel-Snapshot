package org.wyona.yanel.impl.resources;

/**
 *
 */
public class RealmNameInputParameter extends InputParameter {

    /**
     *
     */
    public RealmNameInputParameter(String name, String sampleValue, boolean required, boolean hidden, String value, boolean validate) {
        super(name, sampleValue, required, hidden, value, validate);
    }

    /**
     *
     */
    public String validate(String value) {
        if (value == null) return "NullPointer!";
        if (value.length() < 1) return "No value specified!";
        return null;
    }
}
