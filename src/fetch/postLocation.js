/**
 * Created by godnew on 2017/10/27.
 */
export default function(res){
  return fetch(
    'http://godnew.wang/weixin/send.php?id='+res.fromUsername+"&longitude="+res.longitude+'&latitude='+res.latitude+'&location='+res.location)
    .then((response) => response.text())
}