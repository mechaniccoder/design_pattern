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

# Strategy

- 변경에는 닫혀있고 확장에는 열려있어야 한다는 OCP 법칙이 핵심이었던 패턴이라고 생각합니다. 구체 클래스와의 composition이 아닌 인터페이스와의 composition을 통해 런타임에 어떤 객체와 협력을 할 것인지 결정을 해줘야 합니다.

# Observable

- observable이 observer로 데이터를 직접 보내는(push), observer가 observable의 데이터를 직접 가져오는(pull) 두가지 방식이 있습니다.
  일반적으로 pull 방식이 더 올바른 방법이라고 하는데, push방식의 경우는 observable이 변경되는 데이터를 직접 observer에게 보내야하는 단점이 있기 때문입니다.
  pull방식의 경우는 observable 객체가 observer에게 메세지를 보내면 observer 객체들은 알아서 필요한 데이터를 가져오게 만들 수 있습니다.

- observer 패턴에서 observer가 변경될때 observerable은 건들지 않고 코드를 변경할 수 있다는 장점이 있습니다. observable의 상태는 그대로 놔둬도 된다는 의미이죠.
