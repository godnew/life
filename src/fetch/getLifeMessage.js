/**
 * Created by godnew on 2017/10/19.
 */
export default function(city){
  return fetch('http://godnew.wang/life/api/getLifeMessage.php?city='+city) .then((response) => response.text())
}