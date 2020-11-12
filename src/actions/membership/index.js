async function addUserToSever() {
    // 開啟載入指示
    setDataLoading(true)

    const newData = { memberName,  memberPic, password, birthday, telephone, mobile, email,  address}
    console.log(newData)

    // 連接的伺服器資料網址
    const url = 'http://localhost:3001/straymao/memberlist/add'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(newData))

    const response = await fetch(request)
    const data = await response.json()

    console.log('伺服器回傳的json資料', data)