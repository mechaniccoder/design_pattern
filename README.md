# Design pattern

소프트웨어가 가진 복잡도를 해결하기 위한 넓고 깊은 선조들의 지혜를 익히고 실제로 실무에서 이를 자유자재로 생각하고, 참고하고 활용할 수 있으면
지금보다 더 훌륭한 개발자로 성장할 수 있겠다는 생각에 디자인 패턴에 대한 공부를 시작합니다.

프런트엔드 개발자로서 React와 Redux같은 라이브러리들의 철학이 함수형 프로그래밍에 기반하고 있다고 생각하기 때문에, 실무에 OOP를 적용해보기는 쉽지 않습니다.
하지만 디자인패턴을 학습하는 것은 어떻게 해야 변경에 유연한 코드를 작성할 수 있고 거시적으로 봤을때 소트프웨어 아키텍처를 어떻게 구성할 수 있을지에 대한 힌트를 줄 것이라 기대합니다.
또한, 함수형 프로그래밍과 병렬적으로 학습하기 때문에 둘의 차이점을 비교하는 것도 상당한 영감을 줄 것이라 생각합니다.

> [헤드퍼스트 디자인패턴](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=290892473)을 참고합니다.

# Contents

- [Strategy](#strategy)
- [Observable](#observable)
- [Decorator](#decorator)

# Strategy

- 변경에는 닫혀있고 확장에는 열려있어야 한다는 OCP 법칙이 핵심이었던 패턴이라고 생각합니다. 구체 클래스와의 composition이 아닌 인터페이스와의 composition을 통해 런타임에 어떤 객체와 협력을 할 것인지 결정을 해줘야 합니다.

# Observable

- observable이 observer로 데이터를 직접 보내는(push), observer가 observable의 데이터를 직접 가져오는(pull) 두가지 방식이 있습니다.
  일반적으로 pull 방식이 더 올바른 방법이라고 하는데, push방식의 경우는 observable이 변경되는 데이터를 직접 observer에게 보내야하는 단점이 있기 때문입니다.
  pull방식의 경우는 observable 객체가 observer에게 메세지를 보내면 observer 객체들은 알아서 필요한 데이터를 가져오게 만들 수 있습니다.

- observer 패턴에서 observer가 변경될때 observerable은 건들지 않고 코드를 변경할 수 있다는 장점이 있습니다. observable의 상태는 그대로 놔둬도 된다는 의미이죠.

# Decorator

- 상속으로 확장을 할 경우 컴파일 타임에 의존성이 결정되기 때문에, 클래스가 폭발하는 문제가 있다.
- 데코레이터 패턴은 상속을 사용할 경우에 발생하는 문제를 잘 해결해준다. 특히 OCP(open close principle) 원칙을 지키면서 확장성도 가져갈 수 있다.
- 데코레이터 객체는 클라이언트의 입장에서 감싸는 객체와 같은 행동을 해야하기 때문에 객체가 구현하고 있는 인터페이스를 구현해야만 한다.
- 너무 많은 수의 데코레이터 객체를 만들어야 하는 단점이 있다.

# Singleton

- 어플리케이션 전역에서 단 1개의 인스턴스를 생성하는 패턴이다.
- 어느 곳에서도 접근할 수 있고, 전역 변수와는 다르게 인스턴스를 lazy loading할 수 있다.
- 의존성이 커서 변경점이 어플리케이션 전역으로 퍼질 수 있다. 싱글턴의 고질적인 문제다.
- 멀티스레딩 환경에서 인스턴스를 생성하는 메서드를 synchonization해줘야 한다. 그렇지 않으면 여러 인스턴스가 생성되는 문제가 발생할 수 있다.
- 실제로 싱글턴을 직접 구현해서 사용할 일은 많지는 않을 것이다.
- 프런트엔드 상태관리 라이브러리 들을 생각해보면(Redux, Recoil) 내부적으로 싱글턴을 사용하고 있을 것이라 생각한다. 뿐만 아니라 React Query에서 cahce, Context API도 있다.
  상당히 여러 곳에서 사용되는 것을 봤을때 쉽게 접근할 수 있는 설계 방법인 것 같다. 하지만 앞서 언급했던 바와 같이 의존성이 매우 크기 때문에 조심해서 다뤄야할 필요가 있다.

# Iterator

- array 혹은 linked list 처럼 반복되는 구조에서 구현을 클라이언트에 노출시키지 않고 동일한 인터페이스를 사용할 수 있게끔 하는 패턴이다. Javascript에서는 [symbol.iterator] 활용을
  예로 들 수 있을 것 같다. Map, Set, Array, generator가 이를 사용하는 예시이다.

# Composite

- single object와 group of object를 동일하게 취급하는 패턴이다. 아마 폴더 구조같은 것들에 사용할 수 있을 것 같다. 여기서는 single object나 group object를 동일하게 인식하는
  추상화가 중요하다고 생각한다.
