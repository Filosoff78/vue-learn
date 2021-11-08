<?php
if($_GET["type"] === 'bitrix'){
    $array = json_decode($_GET["text"], true);
    print_r($array);
    $fields = array(
        "SOURCE_ID" => 'сайт', //Источник лида
        "UTM_SOURCE" => 'сайт', //UTM метка
        'ASSIGNED_BY_ID' => 1, // Ответственный, где требуется id пользователя вашего Битрикс24
        "TITLE" => $array['TITLE'],
        "NAME" => $array['NAME'],
        "COMMENTS" => $array['COMMENTS'] ? $array['COMMENTS'] : '',
        "UF_CRM_1635931718" => $array['DELIVERY_TO'] ? $array['DELIVERY_TO'] : 'Доставка не расчитана',
        "UF_CRM_1635932854" => $array['DELIVERY_COST'] ? $array['DELIVERY_COST'] : '',
        "UF_CRM_1635932818" => $array['DELIVERY_CORD'] ? $array['DELIVERY_CORD'] : '',
        "UF_CRM_1635933210" => $array['DATE'] ? $array['DATE'] : '',
        "EMAIL" => [["VALUE" => $array['EMAIL'] ? $array['EMAIL'] : '', "VALUE_TYPE" => "WORK"]],
        "PHONE" => [["VALUE" => $array['PHONE'] ? $array['PHONE'] : '', "VALUE_TYPE" => "WORK"]],
    );

    echo '<pre>';
    print_r($fields);
    echo '</pre>';

    $queryData = http_build_query(array(
        'fields' => $fields
    ));

    $rest = 'crm.lead.add.json';

    $queryUrl = 'https://russkayaderevnya.bitrix24.ru/rest/1/ndnruyud2plkokr3/'.$rest;
    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_SSL_VERIFYPEER => 0,
        CURLOPT_POST => 1,
        CURLOPT_HEADER => 0,
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => $queryUrl,
        CURLOPT_POSTFIELDS => $queryData,
    ));

    $result = curl_exec($curl);
    curl_close($curl);
    $result = json_decode($result, 1);

    if (array_key_exists('error', $result))
    {
        echo "Ошибка при сохранении лида: ".$result['error_description']."";
    }
    else
    {
        AddProduct($result['result']);
    }
}

function AddProduct($id) {
    echo 'Лид создан: '.$id;
    $array = json_decode($_GET["text"], true);
    $rows = [];
    for ($i = 0; $i < count($array['PRODUCTS']); $i++) {
        $x = explode(" ", $array['PRODUCTS'][$i][0]);
        switch ($x[0]) {
            case 'Береза': $productId = 2; break;
            case 'Осина': $productId = 4; break;
            case 'Ольха': $productId = 6; break;
        }
        array_push($rows, ["PRODUCT_ID" => $productId, "QUANTITY" => $x[1], "PRICE" => $x[2]]);
    }
    if($array['DELIVERY_COST'] > 0) array_push($rows, ["PRODUCT_ID" => 10, "QUANTITY" => 1, "PRICE" => $array['DELIVERY_COST']]);
    $queryData = http_build_query(array(
        'id' => $id,
        "rows" => $rows,
    ));

    $rest = 'crm.lead.productrows.set.json';

    $queryUrl = 'https://russkayaderevnya.bitrix24.ru/rest/1/ndnruyud2plkokr3/'.$rest;
    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_SSL_VERIFYPEER => 0,
        CURLOPT_POST => 1,
        CURLOPT_HEADER => 0,
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => $queryUrl,
        CURLOPT_POSTFIELDS => $queryData,
    ));

    $result = curl_exec($curl);
    curl_close($curl);
    $result = json_decode($result, 1);

    if (array_key_exists('error', $result))
    {
        echo "Ошибка при сохранении лида: ".$result['error_description']."";
    }
    else
    {
        echo "Товар добавлен: ".$result['result'];
    }
}
