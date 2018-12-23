declare namespace NodeJS {
    interface Process {
      server: boolean;
      browser: boolean;
    }
    interface Global {
        fetch: Function;
      }
  }

  declare namespace Window {
     interface 
  }