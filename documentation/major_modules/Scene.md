# Scene

Scenes are used to manage canvas elements through the use of _init()_, _create()_ and _update()_ methods. Scenes make up the core foundation of the Vector2Engine. All shapes are created, destroyed and updated through the above mentioned methods. The majority of application logic are also be defined or imported to use inside an instantiated Scene.

## Types

Data Type: **Class**

TypeScript Type: **Scene**

## Using Scene

Creating a scene is as simple as extending the base class and calling _super()_.

```ts
class myScene extends Scene {
  constructor() {
    super();
  }
  protected init(): void {}
  protected create(): void {}
  protected update(ctx: CanvasRenderingContext2D, deltaTime: number): void {}
}
```

## Methods

- Major Methods
  - init()
  - [create()](#create)
  - [update()](#update)
- Object Methods
  - [add](#add)
    - [rect()](#rect)
    - [circle()](#circle)
    - [tri()](#tri)
    - [poly()](#poly)
- Methods
  - [run()](#run)
  - [addObject()](#addObject)
  - [remove()](#remove)
  - [get()](#get)
  - [createAnimation()](#createAnimation)

# init()

- _**TODO**_

# create()

The create method is used to create various shapes, sprites, animation instances, input handlers or configure pre-existing shapes for the Scene instance. Any manipulatable object used in the engine must be instantiated and configured in the create method before being called and modified in the _update()_ method.

## Using create

This method is pre-defined in the Scene class.

```ts
protected create(): void {}
```

# update()

The update method is used to execute any recurring code. Anything placed in this method is executed by the configured framerate value, with the default being 60 times per second. This method can retrieve shapes and use conditionals and shape transforms to give the impression of animation.

## Using update

This method is pre-defined in the Scene class. It receives _ctx_ which accesses the context provided from the canvas element used. It also receives _deltaTime_ which is used as a multiplier to make various updates frame independent.

```ts
protected update(ctx: CanvasRenderingContext2D, deltaTime: number): void {}
```

### **_NOTE: Do not place create() based configurations or shape declarations in update(). This results in executing the code 60 times per second leading to callstack overflow errors and potential crashes or slowdowns._**
