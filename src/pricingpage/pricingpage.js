import React from 'react';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


function Pricingpage() {
    return (
        <Container>
            <main>
                <div className='p-5'>
                    <div className=''>
                        <h1 className='text-start'>
                            ราคาค่าบริการของเรา
                        </h1>
                        <p className='text-start'>
                            ติดต่อเพิ่มเติมเพื่อรับใบเสนอราคา ราคาดังตารางเป็นราคาประมาณ
                        </p>
                        <div className=''>
                            <img src="https://img2.pic.in.th/pic/bridge-california-cliff-golden-gate-bridge-7653.jpg" class="img-fluid" alt="..."></img>
                        </div>
                        <br />
                        <br />



                        <h4 className='text-start'>
                            <div>
                                รายการออกแบบสถาปัตยกรรมและโครงสร้าง
                            </div>
                        </h4>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>
                                        <h5>
                                            พื้นที่ใช้สอย
                                        </h5>
                                    </th>
                                    <th>
                                        <h5>
                                            ราคา / ตารางเมตร
                                        </h5>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ไม่เกิน 150 ตารางเมตร</td>
                                    <td>120 บาท/ตารางเมตร</td>
                                </tr>
                                <tr>
                                    <td>151 - 300 ตารางเมตร</td>
                                    <td>110 บาท/ตารางเมตร</td>
                                </tr>
                                <tr>
                                    <td>301 - 500 ตารางเมตร</td>
                                    <td>100 บาท/ตารางเมตร</td>
                                </tr>
                            </tbody>
                        </Table>

                        <div className='p-2'>
                            <p className='text-start'>
                                <p className='text-start'>
                                    รายละเอียดเพิ่มเติม
                                </p>
                                <div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">1. ราคาค่าออกแบบสถาปัตยกรรม และการคำนวนโครงสร้างเพื่อยื่นขออนุญาต</li>
                                        <li class="list-group-item">2. ปรึกษา ออกแบบที่พักอาศัยด้านกฎหมายควบคุมอาคาร(สถาปัตยกรรม) และโครงสร้างของอาคารโดยวิศวกร</li>
                                        <li class="list-group-item">3. แบบยื่นขออนุญาตในการก่อสร้าง (พร้อมภาคีวิศวกรเซ็นต์ควบคุม)</li>
                                        <li class="list-group-item">4. รายละเอียดอื่น ๆ เช่น 3D model , Perspective render , Permission Building , BOQ ,and รายการคำนวนโครงสร้าง</li>
                                    </ul>
                                </div>
                            </p>
                        </div>

                        <br />


                        <h4 className='text-start'>
                            <div>
                                รายการออกแบบสถาปัตยกรรม
                            </div>
                        </h4>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>
                                        <h5>
                                            พื้นที่ใช้สอย
                                        </h5>
                                    </th>
                                    <th>
                                        <h5>
                                            ราคา / ตารางเมตร
                                        </h5>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ไม่เกิน 150 ตารางเมตร</td>
                                    <td>130 บาท/ตารางเมตร</td>
                                </tr>
                                <tr>
                                    <td>151 - 300 ตารางเมตร</td>
                                    <td>120 บาท/ตารางเมตร</td>
                                </tr>
                                <tr>
                                    <td>301 - 500 ตารางเมตร</td>
                                    <td>100 บาท/ตารางเมตร</td>
                                </tr>
                            </tbody>
                        </Table>

                        <div className='p-2'>
                            <p className='text-start'>
                                <p className='text-start'>
                                    รายละเอียดเพิ่มเติม
                                </p>
                                <div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">1. ราคาค่าออกแบบสถาปัตยกรรม และไม่รวมการคำนวนโครงสร้างเพื่อยื่นขออนุญาต</li>
                                        <li class="list-group-item">2. ปรึกษา ออกแบบที่พักอาศัยด้านกฎหมายควบคุมอาคาร(สถาปัตยกรรม)</li>
                                        <li class="list-group-item">3. แบบยื่นขออนุญาตในการก่อสร้าง</li>
                                        <li class="list-group-item">4. รายละเอียดอื่น ๆ เช่น 3D model , Perspective render , Permission Building , BOQ ,and รายการคำนวนโครงสร้าง</li>
                                    </ul>
                                </div>
                            </p>
                        </div><br />


                        <h4 className='text-start'>
                            <div>
                                รายการเขียนแบบยื่นขออนุญาต
                            </div>
                        </h4>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>
                                        <h5>
                                            พื้นที่ใช้สอย
                                        </h5>
                                    </th>
                                    <th>
                                        <h5>
                                            ราคา / เล่มหรือตารางเมตร
                                        </h5>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ไม่เกิน 150 ตารางเมตร</td>
                                    <td>6000 บาท/เล่ม</td>
                                </tr>
                                <tr>
                                    <td>151 - 300 ตารางเมตร</td>
                                    <td>9000 บาท/เล่ม</td>
                                </tr>
                                <tr>
                                    <td>301 - 500 ตารางเมตร</td>
                                    <td>30 บาท/ตารางเมตร</td>
                                </tr>
                            </tbody>
                        </Table>

                        <div className='p-2'>
                            <p className='text-start'>
                                <p className='text-start'>
                                    รายละเอียดเพิ่มเติม
                                </p>
                                <div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">1. ลูกค้าจะต้องมีแบบ 3D เพื่อใช้ดูประกอบการเขียนแบบขออนุญาต</li>
                                        <li class="list-group-item">2. รายการนี้รวมแบบสภาปัตยกรรม ,แบบโครงสร้าง ,แบบไฟฟ้า ,และแบบสุขาภิบาล</li>
                                    </ul>
                                </div>
                            </p>
                        </div>
                        <br />


                        <h4 className='text-start'>
                            <div>
                                Production 3D Model
                            </div>
                        </h4>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>
                                        <h5>
                                            พื้นที่ใช้สอย
                                        </h5>
                                    </th>
                                    <th>
                                        <h5>
                                            ราคา / ตารางเมตร
                                        </h5>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ไม่เกิน 150 ตารางเมตร</td>
                                    <td>3200 บาท/.skp</td>
                                </tr>
                                <tr>
                                    <td>150 ตารางเมตรขึ้นไป</td>
                                    <td>35 บาท/ตารางเมตร</td>
                                </tr>
                            </tbody>
                        </Table>

                        <div className='p-2'>
                            <p className='text-start'>
                                <p className='text-start'>
                                    รายละเอียดเพิ่มเติม
                                </p>
                                <div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">1. ลูกค้าจะต้องมีแบบแปลน รูปด้าน รูปตัด คร่าวๆ เพื่อใช้ประกอบการขึ้นโมเดล</li>
                                    </ul>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </Container>
    )
}

export default Pricingpage;