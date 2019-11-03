class Boat {
  color: string = 'red';

  @logError('OOps boat has sunk!')
  pilot(): void {
    console.log('swishhh');
  }

  @testDecorator
  get getFormattedColor(): string {
    return this.color;
  }
}

function testDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);
}

function logError(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    const method = desc.value;

    desc.value = function() {
      try {
        method();
      } catch {
        console.log(errorMessage);
      }
    };
  };
}

new Boat().color;
