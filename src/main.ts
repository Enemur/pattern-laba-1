// region Ammo

interface IAmmo {
  getWeight(): number;
  getEnergy(): number;
}

class SevenSixtyTwo implements IAmmo {
  private readonly _weight: number = 16.2;
  private readonly _energy: number = 540;

  public getWeight(): number {
    return this._weight;
  }

  public getEnergy(): number {
    return this._energy;
  }
}

class FiveFiftySix implements IAmmo {
  private readonly _weight: number = 12.31;
  private readonly _energy: number = 1560;

  public getWeight(): number {
    return this._weight;
  }

  public getEnergy(): number {
    return this._energy;
  }
}

// endregion

interface IGun {
  getName(): Gun;
  fire(): void;
  reload(): void;
  getAmmoWeight(): number;
  getAmmoEnergy(): number;
}

// region Guns

enum Gun {
  Ak47 = 'Ak47',
  M4 = 'M4',
  Negev = 'Negev',
  Galil = 'Galil',
  CKC = 'CKC',
}

class Ak47 implements IGun {
  private readonly _ammo: IAmmo;
  private _isReloaded: boolean = false;

  constructor(ammo: IAmmo) {
    this._ammo = ammo;
  }

  public fire(): void {
    if (this._isReloaded) {
      console.log('tratatata');
    } else {
      console.log('I can not tratatata');
    }
  }

  public getName(): Gun {
    return Gun.Ak47;
  }

  public reload(): void {
    this._isReloaded = true;
    console.log('reloaded');
  }

  public getAmmoWeight(): number {
    return this._ammo.getWeight();
  }

  public getAmmoEnergy(): number {
    return this._ammo.getEnergy();
  }
}

class M4 implements IGun {
  private readonly _ammo: IAmmo;
  private _isReloaded: boolean = false;

  constructor(ammo: IAmmo) {
    this._ammo = ammo;
  }

  public fire(): void {
    if (this._isReloaded) {
      console.log('tratatata');
    } else {
      console.log('I can not tratatata');
    }
  }

  public getName(): Gun {
    return Gun.M4;
  }

  public reload(): void {
    this._isReloaded = true;
    console.log('reloaded');
  }

  public getAmmoWeight(): number {
    return this._ammo.getWeight();
  }

  public getAmmoEnergy(): number {
    return this._ammo.getEnergy();
  }
}

class Negev implements IGun {
  private readonly _ammo: IAmmo;
  private _isReloaded: boolean = false;

  constructor(ammo: IAmmo) {
    this._ammo = ammo;
  }

  public fire(): void {
    if (this._isReloaded) {
      console.log('tratatata');
    } else {
      console.log('I can not tratatata');
    }
  }

  public getName(): Gun {
    return Gun.Negev;
  }

  public reload(): void {
    this._isReloaded = true;
    console.log('reloaded');
  }

  public getAmmoWeight(): number {
    return this._ammo.getWeight();
  }

  public getAmmoEnergy(): number {
    return this._ammo.getEnergy();
  }
}

class Galil implements IGun {
  private readonly _ammo: IAmmo;
  private _isReloaded: boolean = false;

  constructor(ammo: IAmmo) {
    this._ammo = ammo;
  }

  public fire(): void {
    if (this._isReloaded) {
      console.log('tratatata');
    } else {
      console.log('I can not tratatata');
    }
  }

  public getName(): Gun {
    return Gun.Galil;
  }

  public reload(): void {
    this._isReloaded = true;
    console.log('reloaded');
  }

  public getAmmoWeight(): number {
    return this._ammo.getWeight();
  }

  public getAmmoEnergy(): number {
    return this._ammo.getEnergy();
  }
}

class CKC implements IGun {
  private readonly _ammo: IAmmo;
  private _isReloaded: boolean = false;

  constructor(ammo: IAmmo) {
    this._ammo = ammo;
  }

  public fire(): void {
    if (this._isReloaded) {
      console.log('tratatata');
    } else {
      console.log('I can not tratatata');
    }
  }

  public getName(): Gun {
    return Gun.CKC;
  }

  public reload(): void {
    this._isReloaded = true;
    console.log('reloaded');
  }

  public getAmmoWeight(): number {
    return this._ammo.getWeight();
  }

  public getAmmoEnergy(): number {
    return this._ammo.getEnergy();
  }
}

// endregion

// region Builders and Directors

interface IAk47Builder {
  setAmmo(ammo: IAmmo): void;
}

class Ak47Builder implements IAk47Builder {
  private _ammo: SevenSixtyTwo | undefined;

  setAmmo(ammo: SevenSixtyTwo): void {
    this._ammo = ammo;
  }

  public reset(): void {
    this._ammo = undefined;
  }

  public getProduct(): Ak47 {
    if (!this._ammo) {
      throw new Error('Set ammo');
    }

    const result = new Ak47(this._ammo);
    this.reset();
    return result;
  }
}

class Ak47Director {
  private builder: Ak47Builder;

  constructor(builder: Ak47Builder) {
    this.builder = builder;
  }

  public build(): void {
    this.builder.setAmmo(new SevenSixtyTwo());
  }
}

interface IM4Builder {
  setAmmo(ammo: IAmmo): void;
}

class M4Builder implements IM4Builder {
  private _ammo: FiveFiftySix | undefined;

  setAmmo(ammo: FiveFiftySix): void {
    this._ammo = ammo;
  }

  public reset(): void {
    this._ammo = undefined;
  }

  public getProduct(): M4 {
    if (!this._ammo) {
      throw new Error('Set ammo');
    }

    const result = new M4(this._ammo);
    this.reset();
    return result;
  }
}

class M4Director {
  private builder: M4Builder;

  constructor(builder: M4Builder) {
    this.builder = builder;
  }

  public build(): void {
    this.builder.setAmmo(new FiveFiftySix());
  }
}

interface INegevBuilder {
  setAmmo(ammo: IAmmo): void;
}

class NegevBuilder implements INegevBuilder {
  private _ammo: FiveFiftySix | undefined;

  setAmmo(ammo: FiveFiftySix): void {
    this._ammo = ammo;
  }

  public reset(): void {
    this._ammo = undefined;
  }

  public getProduct(): Negev {
    if (!this._ammo) {
      throw new Error('Set ammo');
    }

    const result = new Negev(this._ammo);
    this.reset();
    return result;
  }
}

class NegevDirector {
  private builder: NegevBuilder;

  constructor(builder: NegevBuilder) {
    this.builder = builder;
  }

  public build(): void {
    this.builder.setAmmo(new FiveFiftySix());
  }
}

interface IGalilBuilder {
  setAmmo(ammo: IAmmo): void;
}

class GalilBuilder implements IGalilBuilder {
  private _ammo: SevenSixtyTwo | undefined;

  setAmmo(ammo: SevenSixtyTwo): void {
    this._ammo = ammo;
  }

  public reset(): void {
    this._ammo = undefined;
  }

  public getProduct(): Galil {
    if (!this._ammo) {
      throw new Error('Set ammo');
    }

    const result = new Galil(this._ammo);
    this.reset();
    return result;
  }
}

class GalilDirector {
  private builder: GalilBuilder;

  constructor(builder: GalilBuilder) {
    this.builder = builder;
  }

  public build(): void {
    this.builder.setAmmo(new SevenSixtyTwo());
  }
}

interface ICKCBuilder {
  setAmmo(ammo: IAmmo): void;
}

class CKCBuilder implements ICKCBuilder {
  private _ammo: SevenSixtyTwo | undefined;

  setAmmo(ammo: SevenSixtyTwo): void {
    this._ammo = ammo;
  }

  public reset(): void {
    this._ammo = undefined;
  }

  public getProduct(): CKC {
    if (!this._ammo) {
      throw new Error('Set ammo');
    }

    const result = new CKC(this._ammo);
    this.reset();
    return result;
  }
}

class CKCDirector {
  private builder: CKCBuilder;

  constructor(builder: CKCBuilder) {
    this.builder = builder;
  }

  public build(): void {
    this.builder.setAmmo(new SevenSixtyTwo());
  }
}

// endregion

// region Factory

interface IFactory {
  getGun(gun: Gun): IGun;
}

type gunCreatorType = () => IGun;

class GunFactory implements IFactory {
  private static _instance: IFactory;
  private gunsCreator: Map<Gun, gunCreatorType> = this.initCreators();

  private constructor() {}

  public static getInstance(): IFactory {
    if (!this._instance) {
      this._instance = new GunFactory();
    }

    return this._instance;
  }

  public getGun(gun: Gun): IGun {
    const creator = this.gunsCreator.get(gun);
    if (creator) {
      return creator();
    }

    throw new Error('Unsupported gun');
  }

  private initCreators(): Map<Gun, gunCreatorType> {
    return new Map([
      [ Gun.Ak47, this.getAk47.bind(this) ],
      [ Gun.M4, this.getM4.bind(this) ],
      [ Gun.Negev, this.getNegev.bind(this) ],
      [ Gun.Galil, this.getGalil.bind(this) ],
      [ Gun.CKC, this.getCKC.bind(this) ],
    ])
  }

  private getAk47(): IGun {
    const builder = new Ak47Builder();
    const director = new Ak47Director(builder);

    director.build();

    return builder.getProduct();
  }

  private getM4(): IGun {
    const builder = new M4Builder();
    const director = new M4Director(builder);

    director.build();

    return builder.getProduct();
  }

  private getNegev(): IGun {
    const builder = new NegevBuilder();
    const director = new NegevDirector(builder);

    director.build();

    return builder.getProduct();
  }

  private getGalil(): IGun {
    const builder = new GalilBuilder();
    const director = new GalilDirector(builder);

    director.build();

    return builder.getProduct();
  }

  private getCKC(): IGun {
    const builder = new CKCBuilder();
    const director = new CKCDirector(builder);

    director.build();

    return builder.getProduct();
  }
}

// endregion

function gunHandler(gun: IGun): void {
  console.log(`Gun: ${gun.getName()}`);

  const weigth = gun.getAmmoWeight();
  const energy = gun.getAmmoEnergy();

  console.log(`Weight: ${weigth}`);
  console.log(`Energy: ${energy}`);

  gun.fire();

  gun.reload();

  gun.fire();
}

export function main() {
  const factory: IFactory = GunFactory.getInstance();

  for (const gun of Object.values(Gun)) {
    gunHandler(factory.getGun(gun));
    console.log();
  }
}

main();
