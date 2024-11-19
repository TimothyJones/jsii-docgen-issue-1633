/**
 * This class reproduces the bugs at {@link https://github.com/cdklabs/jsii-docgen/issues/1633 | this 
 * issue} and {@link https://github.com/cdklabs/jsii-docgen/issues/1634 | this link}
 *
 * @public
 */
export class ReproduceBug {

    public someField: string;

    /**
     * This documents a constructor
     * 
     * @param someParameter - this documents the parameter
     */
    constructor(someParameter: string) {
        // now we use the parameter
        this.someField = someParameter; 
    }
  }
  