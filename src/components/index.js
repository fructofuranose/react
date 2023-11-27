//エントリポイント（モジュールをここに集める、名前付きexportと別名exportの併用）
//'component'をdefaultという名前で読み込み、それをas name で名前を付けている nameは指定なし
export {default as Article} from './Article'
export {default as Content} from './Content'    
export {default as Title} from './Title'    
export {default as PublishButton} from './PublishButton'
export {default as TextInput} from './TextInput'
export {default as Counter} from './Counter'
export {default as Toggle} from './Toggle'