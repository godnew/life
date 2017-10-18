/**
 * Created by godnew on 2017/10/18.
 */
import Util from '../util/Util'
export default function famous(){
  return fetch('http://api.tianapi.com/txapi/dictum/?key='+Util.TianXin_KEY) .then((response) => response.text())
}