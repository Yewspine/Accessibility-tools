export class AccessibilityController
{
  /**
   * @public
   * @static
   * @default
   * @description available parameters
   * */
  static parameters = Object.freeze({
    dyslexiaFont: true,
    highContrast: true,
    largerText: true,
    reduceMotion: true,
  });

  #settings = {};

  /**
   * Enable or disable the Accessibility Parameters
   * @constructor
   * @param {Object} options - the Options to display the paremeter for 
   * */
  constructor(options = AccessibilityController.parameters)
  {
    this.#settings = options;
    this.#applySettings(this.#settings);
  }


  /**
   * @public
   * @method getSettings
   * @description getter for settings member
   * @return {Object} an object containing the configured parameters 
   * */
  getSettings()
  {
    return this.#settings;
  }

  /**
   * @private
   * @method applySettings
   * @description apply the options to the local storage 
   * @param {Object} options - The options to set 
   * */
  #applySettings(options)
  {
    this.#checkParameters(options);
    //@TODO: Add a small check to keep only object made true
    // Put those preferences in the local storage
    localstorage.setItem('accessibility-settings', JSON.stringify(options));
  }

  /**
   * @private
   * @method checkParameters
   * @description Check if the input parameters are valid
   * @param {Object} options - The entry parameters provided in the constructor
   * @throws {SyntaxError} Inut options must contain only valid entry based on parameters member
   * */
  #checkParameters(options)
  {
    for ( const [key, _] of Object.entries(options) )
    {
      // Verify if the key exists in parameters static field
      // Object.prototype.hasOwnProperty is used for compatibility purpose
      if ( !Object.prototype.hasOwnProperty(AccessibilityController.parameters, key) )
      {
        throw new SyntaxError("Unexpected keys in AccessibilityController constructor");
      } 
    }
  }

}
