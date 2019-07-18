import Manage from './manage/Manage'
import Detail from './detail/Detail'
import User from './User.vue'
import Commodity from './detail/Commodity'
import Upload from './upload/Upload'
import Alter from './alter/Alter'
import Userlist from './userlist/Userlist'

User.Manage = Manage
User.Detail = Detail
User.Detail.Commodity = Commodity
User.Upload = Upload
User.Alter = Alter
User.Userlist = Userlist

export default User