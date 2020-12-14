/* worklet */

class SuperUnderlinePainter {
  // return an array of input argument types
  static get inputArguments() {
    return [
      '<number>', // underline width
      '<color>',  // underline color
    ];
  }
  paint(ctx, geometry, properties, args) {
    console.log('args', args);
    console.log('--outside', properties.get('--outside'));
    // get the argument value
    const [underlineWidth, underlineColor] = args;
    // use them to paint
    ctx.fillStyle = underlineColor.cssText;
    ctx.fillRect(0, 0, 3, underlineWidth.value);
  }
}

// Register our class under a specific name
registerPaint('super-underline', SuperUnderlinePainter);