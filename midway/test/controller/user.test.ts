import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework,Application } from '@midwayjs/koa';

describe('test/controller/user.test.ts', () => {
  let app: Application;

  beforeAll(async () => {
    try {
      app = await createApp<Framework>();
    } catch(err) {
        console.error('test beforeAll error', err);
      throw err;
    }
  });

  afterAll(async () => {
    await close(app);
  });

  it('正常测试 POST /api/user/login', async () => {
    const result = await createHttpRequest(app)
      .post('/api/user/login')
      .set({username:'jack',password:'redballoon'})

    expect(result.status).toBe(200);
    expect(result.body.message).toBe('登录成功');
  })


})