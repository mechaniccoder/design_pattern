# Design pattern

소프트웨어가 가진 복잡도를 해결하기 위한 넓고 깊은 선조들의 지혜를 익히고 실제로 실무에서 이를 자유자재로 생각하고, 참고하고 활용할 수 있으면
지금보다 더 훌륭한 개발자로 성장할 수 있겠다는 생각에 디자인 패턴에 대한 공부를 시작합니다.

> [헤드퍼스트 디자인패턴](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=290892473)을 참고합니다.

# Contents

- [Observable](#observable)

# Observable

- observable이 observer로 데이터를 직접 보내는(push), observer가 observable의 데이터를 직접 가져오는(pull) 두가지 방식이 있습니다.
  일반적으로 pull 방식이 더 올바른 방법이라고 하는데, push방식의 경우는 observable이 변경되는 데이터를 직접 observer에게 보내야하는 단점이 있기 때문입니다.
  pull방식의 경우는 observable 객체가 observer에게 메세지를 보내면 observer 객체들은 알아서 필요한 데이터를 가져오게 만들 수 있습니다.

- observer 패턴에서 observer가 변경될때 observerable은 건들지 않고 코드를 변경할 수 있다는 장점이 있습니다. observable의 상태는 그대로 놔둬도 된다는 의미이죠.
