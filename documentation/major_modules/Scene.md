# Scene

Scenes are used to manage canvas elements through the use of _init()_, _create()_ and _update()_ methods. Scenes make up the core foundation of the Vector2Engine. All shapes are created, destroyed and updated through the above mentioned methods. The majority of application logic are also be defined or imported to use inside an instantiated Scene. Any methods or internal objects used must be called using _this_.

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
    - [rect()](#addrect)
    - [circle()](#addcircle)
    - [tri()](#addtri)
    - [poly()](#addpoly)
- Methods
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

# add

The add Object contains various methods designed to add shapes to the Scene. Any and all _add_ calls must be called inside the Scene _update()_ method.

## Using add

This object is pre-defined inside the Scene class. It containes 4 methods to configure and draw shapes to the canvas. [rect](#addrect), [circle](#addcircle), [tri](#addtri) and [poly](#addpoly). All shapes created through _add_ must provide an _id_ argument in order to be used in the Scenes _objectManager_.

```ts
protected create(): void {
  // Example using rect.
  this.add.rect("rect", 100, 100);
}
```

## add.rect()

This method is used to create an instance of [RectangleBase]() to the Scene. The rectangles origin uses the _x_ and _y_ arguments to plot the upper left vertex. The _width_ argument is used to plot the upper right vertex. The _height_ argument is used to plot the bottom left vertex while both _width_ and _height_ are used to plot the bottom right vertex.

### Arguments

- **id**: string | _Required_
- **x**: number | _Required_
- **y**: number | _Optional_
  - **Default**: **x** value
- **width**: number | _Optional_
  - **Default**: 100
- **height**: number | _Optional_
  - **Default**: 100

**Returns**: Instance of [RectangleBase]() of type _Rectangle_.

```ts
this.add.rect(id: string, x: number, y?: number, width?: number, height?: number): Rectangle;
```

## add.circle()

This method is used to create an instance of [CircleBase]() to the Scene. A circles origin is defined by its _x_ and _y_ arguments. The _diameter_ argument is used to expand an arc from the origin. A circle is drawn from the right side at 90 degrees. This point is considered the _startAngle_ and starts with a value of 0. The arc then rotates clockwise to draw the circle until it meets the angle of the _endAngle_ argument. If drawing in reverse is preferred, the _counterClock_ argument can be set to _true_.

### Arguments

- **id**: string | _Required_
- **x**: number | _Required_
- **y**: number | _Optional_
  - **Default**: **x** value
- **diameter**: number | _Optional_
  - **Default**: 50
- **startAngle**: number | _Optional_
  - **Default**: 0
- **endAngle**: number | _Optional_
  - **Default**: 360
- **counterClock**: boolean | _Optional_
  - **Default**: false

**Returns**: Instance of [CirlceBase]() of type _Circle_.

```ts
this.add.circle(id: string,  x: number, y?: number, diameter?: number, startAngle?: number, endAngle?: number, counterClock?: boolean): Circle;
```

## add.tri()

This method is used to create an instance of [TriangleBase]() to the Scene. A triangles origin is plotted directly from the _x_ and _y_ arguments for the upper left vertex. The _size_ argument is used to plot the upper right vertex and the lower middle vertex. All triangles by default are equilateral and render upside down. If a non-equilateral triangle is preffered, use the [poly](#addpoly) method instead.

### Arguments

- **id**: string | _Required_
- **x**: number | _Required_
- **y**: number | _Optional_
  - **Default**: **x** value
- **size**: number | _Optional_
  - **Default**: 100

**Returns**: Instance of [TriangleBase]() of type _Triangle_.

```ts
this.add.tri(id: string, x: number, y?: number, size?: number): Triangle;
```

## add.poly()

This method is used to create an instance of [PolygonBase]() to the Scene. Polygons are more complex only in the fact each vertex is plotted manually. The origin is defined by the first _Vector2Snippet_ in the _vertices_ array argument. A minimum of three vertices must be defined to create a polygon.

### Arguments

- **id**: string | _Required_
- **vertices**: [Vector2Snippet]()[ 3+ ] | _Required_

**Returns**: Instance of [PolygonBase]() of type _Polygon_.

```ts
this.add.poly(id: string, vertices: [Vector2Snippet, Vector2Snippet, Vector2Snippet, ...Vector2Snippet[]]): Polygon;
```
