# RESTful API

## REST의 정의

Representational State Transfer의 약자로 자원을 표현으로 구분하여 해당 자원의 상태(정보)를 주고 받는 모든 것을 의미한다.

HTTP URI를 통해 자원을 명시하고, HTTP Method(POST, GET, PUT, DELETE)를 통해 해당 자원에 대한 CRUD Operation을 적용하는 것을 의미한다.

+ 자원 (resource)의 표현(representation)에 의한 상태 전달.
+ REST는 기본적으로 웹의 기존 기술과 HTTP 프로토콜을 그대로 활용하기 때문에 웹의 장점을 최대한 활용할 수 있는 아키텍처 스타일이다.
+ REST는 네트워크 상에서 Client와 Server 사이의 통신 방식 중 하나이다.

## 구성 요소

### 자원(Resource): URI

+ 모든 자원에 고유한 ID가 존재하고, 이 자원은 Server에 존재한다.
+ 자원을 구별하는 ID는 '/groups/:group_id'와 같은 HTTP URI이다.
+ Client는 URI를 이용해서 자원을 지정하고 해당 자원의 상태(정보)에 대한 조작을 Server에 요청한다.

URL - Uniform Resource Locator 자원(파일) 위치
URI - Uniform Resource Identifier 자원 식별자

### 행위(Verb): HTTP Method

+ HTTP 프로토콜의 Method를 사용한다.
+ HTTP 프로토콜은 GET, POST, PUT, DELETE와 같은 메서드를 제공한다.

### 표현(Representation of Resource)

+ Client가 자원의 상태(정보)에 대한 조작을 요청하면 Server는 이에 적절한 응답(Resprentation)을 보낸다.
+ REST에서 하나의 자원은 JSON, XML, TEXT, RSS등 여러 형태의 Representation으로 나타내어 질 수 있다.
+ JSON 혹은 XML을 통해 데이터를 주고 받는 것이 일반적이다.

## 장점

+ HTTP 프로토콜의 인프라를 그대로 사용하므로 REST API 사용을 위한 별도의 인프라를 구축할 필요가 없다.
+ HTTP 프로토콜의 표준을 최대한 활용하여 여러 추가적인 장점을 함께 가져갈 수 있게 해준다.
+ HTTP 표준 프로토콜에 따르는 모든 플랫폼에서 사용이 가능하다.
+ Hypermedia API의 기본을 충실히 지키면서 범용성을 보장한다.
+ REST API 메시지가 의도하는 바를 명확하게 나타내므로 의도하는 바를 쉽게 파악할 수 있다.
+ 여러가지 서비스 디자인에서 생길 수 있는 문제를 최소화한다.
+ 서버와 클라이언트의 역할을 명확하게 분리한다.

## 단점

+ 표준이 존재하지 않는다.
+ 사용할 수 있는 메소드가 4가지 밖에 없다
+ 브라우저를 통해 테스트할 일이 많은 서비스라면 쉽게 고칠 수 있는 URL 보다 Header 값이 왠지 더 어렵게 느껴진다.
+ 구형 브라우저가 아직 제대로 지원해주지 못하는 부분이 존재한다.

## REST가 필요한 이유
+ 애플리케이션 분리 및 통합
+ 다양한 클라이언트의 등장
+ 최근의 서버 프로그램은 다양한 브라우저와 안드로이드폰, 아이폰과 같은 모바일 디바이스에서도 통신을 할 수 있어야 한다.
+ 이러한 멀티 플랫폼에 대한 지원을 위해 서비스 자원에 대한 아키텍처를 세우고 이용하는 방법을 모색한 결과, REST에 관심을 가지게 되었다.

## REST API

+ API (Application Programming Iterface)란
    + 데이터와 기능의 집합을 제공하여 컴퓨터 프로그램간 상호작용을 촉진하며, 서로 정보를 교환가능 하도록 하는 것.
+ REST API의 정의
    + REST 기반으로 서비스 API를 구현한 것.
    + 최근 OpenAPI, 마이크로 서비스 등을 제공하는 업체 대부분 REST API를 제공.

## 특징

+ 사내 시스템들도 REST 기반으로 시스템을 분산해 확장성과 재사용성을 높여 유지보수 및 운용을 편리하게 할 수 있다.

+ REST는 HTTP 표준을 기반으로 구현하므로, HTTP를 지원하는 프로그램 언어로 클라이언트, 서버를 구현할 수 있다.

+ 즉, REST API를 제작하면 델파이 클라이언트 뿐 아니라, 자바, C#, 웹 등을 이용해 클라이언트를 제작할 수 있다.

## 기본 규칙

+ 도큐먼트 - 객체 인스턴스나 데이터베이스 레코드와 유사한 개념
+ 컬렉션 - 서버에서 관리하는 디렉터리라는 리소스
+ 스토어 - 클라이언트에서 관리하는 리소스 저장소

1. URI는 정보의 자원을 표현해야 한다.
    + resource는 동사보다는 명사를, 대문자보다 소문자를 사용한다.
    + resource의 도큐먼트 이름으로는 단수 명사를 사용해야 한다.
    + resource의 컬렉션 이름으로는 복수 명사를 사용해야 한다.
    + resource의 스토어 이름으로는 복수 명사를 사용해야 한다.

2. 자원에 대한 행위는 HTTP Method로 표현한다.
    + URI에 HTTP Method가 들어가면 안된다.
        + GET/members/delete/1 -> DELETE /members/1
    + URI에 행위에 대한 동사 표현이 들어가면 안된다
    + 경로 부분 중 변하는 부분은 유일한 값으로 대체한다.

## 설계 규칙

1. 슬래시 구분자(/)는 계층 관계를 나타내는데 사용

2. URL 마지막 문자로 슬래시를 포함하지 않는다.
    + URI에 포함되는 모든 글자는 리소스의 유일한 식별자로 사용되어야 하며 URI가 다르다는 것은 리소스가 다르다는 것이고, 역으로 리소스가 다르면 URI도 달라져야 한다.
    + REST API는 분명한 URI를 만들어 통신을 해야 하기 때문에 혼동을 주지 않도록 URI 경로의 마지막에 슬래시를 사용하지 않는다.

3. 하이픈(-)은 가독성을 높이는데 사용
    + 불가피하게 긴 URI 경로를 사용하게 된다면 하이픈을 사용해 가독성을 높인다.

4. 밑줄(_)은 URI에 사용하지 않는다.

5. URI 경로에는 소문자가 적합하다.

6. 파일확장자는 URI에 포함하지 않는다
    + ex) http://restapi.example.com/members/soccer/345/photo.jpg (x)
    + ex) GET/members/soccer/345/photo HTTP/1.1 Host:restapi.example.com Accept: image/jpg (o)

7. 리소스 간에는 연관 관계가 있는 경우
    + /리소스명/리소스ID/관계가 있는 다른 리소스명
    + ex) GET : /users/{userid}/devices (일반적으로 소유 'has'의 관계를 표현할 때)

## 목적

+ 이해하기 쉽고 사용하기 쉬운 REST API를 만드는 것
+ RESTful한 API를 구현하는 근본적인 목적이 성능 향상에 있는 것은 아니라 일관적인 컨벤션을 통한 API의 이해도 및 호환성을 높이는 것이 주 동기이니, 성능이 중요한 상황에서는 굳이 RESTful한 API를 구현할 필요는 없다.

## RESTful 하지 못한 경우

+ CRUD 기능을 모두 POST로만 처리하는 API
+ route에 resource, id 외의 정보가 들어가는 경우












