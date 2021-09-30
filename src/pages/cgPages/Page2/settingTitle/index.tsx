import type { ReactNode } from 'react';
import { Button, Form, Checkbox, Input } from 'antd';
import styles from './index.less';

const TitleContainer: React.FC<{ title: string; children?: ReactNode; className?: string }> = ({
  children,
  title,
  className,
}) => (
  <div className={`${styles.gContainer} ${className}`}>
    <span className={styles.uTitle}>{title}</span>
    {children}
  </div>
);

const closeWin = () => {
  window.electron.ipcRenderer.invoke('close-win', { winName: 'page2' });
};

const SettingTitle: React.FC = () => {
  return (
    <div className={styles.gWrapper}>
      <div className={styles.gMain}>
        <Form size="small" className={styles.mProps}>
          <TitleContainer title="标题属性" className={styles.mTitleProps}>
            <div>
              <Button size="small">快来做封面</Button>
              <Button size="small" type="link">
                查看使用教程
              </Button>
            </div>
            {/* <Form size="small"> */}
            <Form.Item label="封面图片" name="coverImg">
              <Input />
            </Form.Item>
            <Form.Item label="封面音乐" name="coverMusic">
              <Input />
            </Form.Item>
            {/* </Form> */}
          </TitleContainer>
          <TitleContainer title="标题按钮">
            {/* <Form size="small"> */}
            <Form.Item>
              <Checkbox disabled checked>
                <Form.Item label="开始">
                  <Input />
                </Form.Item>
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Checkbox>
                <Form.Item label="读取进度">
                  <Input />
                </Form.Item>
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Checkbox>
                <Form.Item label="CG鉴赏">
                  <Input />
                </Form.Item>
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Checkbox>
                <Form.Item label="BGM鉴赏">
                  <Input />
                </Form.Item>
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Checkbox>
                <Form.Item label="设置">
                  <Input />
                </Form.Item>
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Checkbox>
                <Form.Item label="离开">
                  <Input />
                </Form.Item>
              </Checkbox>
            </Form.Item>
            {/* </Form> */}
          </TitleContainer>
        </Form>
        <div className={styles.uPreview} />
        <Form size="small">
          <TitleContainer title="按钮位置与坐标" className={styles.mPos}>
            <TitleContainer title="">
              <div>
                <div className={styles.mPosForm}>
                  <Form.Item label="起始X坐标">
                    <Input />
                  </Form.Item>
                  <Form.Item label="起始Y坐标">
                    <Input />
                  </Form.Item>
                  <Form.Item label="按钮间距">
                    <Input />
                  </Form.Item>
                  <Form.Item>
                    <Checkbox>使用横向布局</Checkbox>
                  </Form.Item>
                </div>
              </div>
            </TitleContainer>
            <div>
              <TitleContainer title="选择按钮坐标" className={styles.mPosChoose}>
                <Form.Item label="X坐标">
                  <Input />
                </Form.Item>
                <Form.Item label="Y坐标">
                  <Input />
                </Form.Item>
              </TitleContainer>
              <div className={styles.uPreview}>
                <Form.Item>
                  <Checkbox>使用自由坐标</Checkbox>
                </Form.Item>
                <Button size="small">复位</Button>
                <Button size="small" type="primary" ghost>
                  预览
                </Button>
              </div>
            </div>
          </TitleContainer>
        </Form>
      </div>
      <div className={styles.gFooter}>
        <Button type="primary">确认</Button>
        <Button onClick={closeWin}>取消</Button>
      </div>
    </div>
  );
};

export default SettingTitle;
