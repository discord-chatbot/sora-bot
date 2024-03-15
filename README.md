# 마법의 소라고동 봇

마법의 소라고동님이 질문에 답변해주는 디스코드 봇입니다. 소라고동 또는 소라고둥 채널에서만 사용 가능합니다.

**봇 실행 방법:**

1. Node.js와 npm을 설치합니다.
2. 프로젝트 폴더에서 다음 명령어를 실행하여 의존성을 설치합니다.

```bash
npm install
```

3. `.env` 파일을 만들고 다음 내용을 작성합니다.

```
token=<your_bot_token>
clientId=<your_bot_clientId>
```

위 내용에서 `<your_bot_token>`을 디스코드 개발자 포털에서 발급받은 봇 토큰으로, `<your_bot_clientId>`를 클라이언트 ID로 바꾸어주세요.

**개발 환경에서 실행**

개발 환경에서는 `.env.dev` 파일을 만들고 개발용 토큰과 클라이언트 ID를 설정하여 봇을 실행할 수 있습니다.

`.env.dev` 파일 예시:

```
token=<your_dev_bot_token>
clientId=<your_dev_bot_clientId>
```

개발 환경에서 nodemon으로 봇을 실행하려면 다음 명령어를 사용합니다.

```bash
npm run dev
```

**프로덕션 환경에서 실행**

프로덕션 환경에서는 다음 명령어를 사용하여 봇을 실행합니다.

```bash
node index.js
```

pm2로 실행할 경우 다음 명령어를 사용하여 봇을 실행합니다.

```bash
npm run start
```

**문제 해결:**

문제가 발생하면 다음을 확인하세요.

* `.env` 또는 `.env.dev` 파일의 토큰과 클라이언트 ID가 정확한지 확인합니다.
* Node.js와 npm이 설치되어 있는지 확인합니다.

**봇 사용법**

* 도움말: [help.md](help.md) 문서를 참고해주세요.

**참고:**

* `--dev` 플래그는 개발 환경에서 봇을 실행할 때 사용하는 플래그입니다.
* `.env.dev` 파일은 개발 환경에서만 사용되는 환경 설정 파일입니다.

**추가 정보:**

* 디스코드 개발자 포털: [https://discord.com/developers/applications](https://discord.com/developers/applications)
* Node.js 설치: [https://nodejs.org/en/](https://nodejs.org/en/)
* npm 설치: [https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm)
