<template>
  
  <div>
    <ColumnChart />
    <p></p>
    <p></p>
    <LineChart />
    <p>Kết luận xu hướng mua bán nhà ở đang giảm dần qua các năm, suy ra lượng cung cầu sẽ giảm dần. Theo quan hệ tuyến tính giá nhà cũng sẽ giảm. Cùng nhau phân tích biểu đồ bên dưới, giá nhà ở qua từng năm liệu logic này có đúng hay không</p>
    <p></p><br>
    <p></p>
    <PricePerYear />
    <p>Như vậy việc tỉ giá nhà đã tuân theo quy luật cung cầu, trong thời gian này số lượng nhà được mua bán đã giảm rất mạnh, rất nhiều nhà được xây lên có dẫú hiệu tồn kho. Nguyên nhân chính do khủng hoảng bong bóng nhà ở 2008</p>
    <Scatter />
    <p></p>
    <p></p>
  </div>
</template>

<script>
import ColumnChart from './ColumnsChart.vue';
import LineChart from './LineChart.vue';
import Pie from "./Pie.vue";
import PricePerYear from "./PricePerYear.vue";
import Scatter from "./Scatter.vue";
export default {
  components: {
    ColumnChart,
    LineChart,
    PricePerYear,
    Pie,
    Scatter
  }
}
</script>