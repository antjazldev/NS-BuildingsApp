/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.java.lang;

public class Object_vendor_121063_32_TabContentFactoryImpl extends java.lang.Object
    implements com.tns.NativeScriptHashCodeProvider, android.widget.TabHost.TabContentFactory {
  public Object_vendor_121063_32_TabContentFactoryImpl() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public android.view.View createTabContent(java.lang.String param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    return (android.view.View)
        com.tns.Runtime.callJSMethod(this, "createTabContent", android.view.View.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
