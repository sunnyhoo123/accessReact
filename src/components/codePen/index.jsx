import React from 'react';
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
import MaxLength from 'braft-extensions/dist/max-length'
import styles from './index.less'

const options = {
  defaultValue: 3, // 指定默认限制数，如不指定则为Infinity(无限)
}
BraftEditor.use(MaxLength(options))
class Talent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: BraftEditor.createEditorState(null)
    }
  }
  async componentDidMount() {
    // 假设此处从服务端获取html格式的编辑器内容
    // const htmlContent = await fetchEditorContent()
    const htmlContent = '<p>6</p>'
    // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
    this.setState({
      editorState: BraftEditor.createEditorState(htmlContent)
    })
  }
  submitContent = async () => {
    // 在编辑器获得焦点时按下ctrl+s会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
    // const htmlContent = this.state.editorState.toHTML()
    // const result = await saveEditorContent(htmlContent)
  }
  handleEditorChange = (editorState) => {
    this.setState({ editorState })
  }
  render() {
    const { editorState } = this.state
    return (
      <div className={styles.myComponent}>
        <BraftEditor
          value={editorState}
          maxLength={3}
          onChange={this.handleEditorChange}
          onSave={this.submitContent}
          onReachMaxLength={() => console.log('不能再输入了！')}
        />
      </div>
    );
  }
}
export default Talent