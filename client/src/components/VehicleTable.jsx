
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Table, Popconfirm, Button, Input, Modal, Form, Select, Space, InputNumber} from 'antd';
import { useVehicle } from '../context/VehicleContext';
import { coordinates } from '../assets/dummydata';
const { Option } = Select;
    const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
    };
    //esta no me sirve porque borrare los botones
    const tailLayout = {
    wrapperCol: {
        offset: 2,
        span: 16,
    },
    };

const VehicleTable = ()=>{
    
    const [gridData, setGridData]=useState([]);
    const [loading, setLoading]=useState(false);
    const [searchText, setSearchText]=useState("");
    let [filterdata]=useState("")
    const {setMarker}=useVehicle();
    const [isFiltering,setIsFiltering]=useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    useEffect(()=>{
        //loadData();
        if(!isFiltering){
            const interval = setInterval(() => {
                
                setLoading(true);
                axios.get('http://localhost:4000/api/vehicles').then((response)=>{
                    let okdata = response.data.map(function (obj) { 
                        // Assign new key
                        obj['key'] = obj['_id'];      
                        // Delete old key
                        delete obj['_id'];      
                        return obj;
                    });
                    setGridData(okdata);
                    setLoading(false);
                    console.log("data table");
                });                        
            }, 5000);
        
            return () => clearInterval(interval);
        }
    },[isFiltering]);
    
    const loadData=async()=>{
        setLoading(true);
        const response=await axios.get('http://localhost:4000/api/vehicles');
        let okdata = response.data.map(function (obj) { 
            // Assign new key
            obj['key'] = obj['_id'];      
            // Delete old key
            delete obj['_id'];      
            return obj;
        });
        setGridData(okdata);
        setLoading(false);
    }

    const handleShow=(record)=>{        
        let x=Math.floor(Math.random() * 317);
        setMarker(coordinates[x]);
    }
    
    const handleSearch=(e)=>{
        setSearchText(e.target.value);
        if(e.target.value.trim()===""){
            setIsFiltering(false);
            loadData();
        }
    }

    const globaSearch=()=>{
        setIsFiltering(true);
        filterdata=gridData.filter((value)=>{
            console.log(typeof(value.YEAR));
            return(
                value.placa.toLowerCase().includes(searchText.toLowerCase()) ||
                value.BRAND.toLowerCase().includes(searchText.toLowerCase()) ||
                value.MODEL.toLowerCase().includes(searchText.toLowerCase()) ||
                value.YEAR.toString().includes(searchText) ||
                value.COLOR.toLowerCase().includes(searchText.toLowerCase()) ||
                value.TYPE.toLowerCase().includes(searchText.toLowerCase()) ||
                value.STATUS.toLowerCase().includes(searchText.toLowerCase())
            )
        })
        setGridData(filterdata);
    }

    const showModal = () => {
        setIsModalOpen(true);
    };
        
    const handleCancel = () => {
        form.resetFields();
        setIsModalOpen(false);
    };
      
    const columns = [
    {
        title: 'Placa',
        dataIndex: 'placa',
        key: 'placa',
    },
    {
        title: 'Brand',
        dataIndex: 'BRAND',
        key: 'BRAND',
    },
    {
        title: 'Model',
        dataIndex: 'MODEL',
        key: 'MODEL',
    },
    {
        title: 'Year',
        dataIndex: 'YEAR',
        key: 'YEAR',
    },
    {
        title: 'Color',
        dataIndex: 'COLOR',
        key: 'COLOR',
    },
    {
        title: 'Type',
        dataIndex: 'TYPE',
        key: 'TYPE',
    },
    {
        title: 'Status',
        dataIndex: 'STATUS',
        key: 'STATUS',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => 
            gridData.length>=1?(
                <Popconfirm title="Deseas ver este carro en el mapa?" onConfirm={()=>handleShow(record)}>
                    <Button type='primary'>
                        Mostrar
                    </Button>                        
                </Popconfirm>
            ):null,
        },
    ];
    
    const [form] = Form.useForm();
    
    const onFinish = async(values) => {
        setLoading(true);
        const result=axios.post("http://localhost:4000/api/vehicles",values).then((response)=>{
            console.log("todo good", response.status);
            if(response.status===200){
                handleCancel();
                setLoading(false);
                alert(response.data.message);
            }else{
                console.log(response)
                alert("Error intentalo de nuevo ")
            }
        }).catch(function (error) {
            alert("Error intentalo de nuevo "+error)
        });                                    
    };
  
    

    return(
        <Row className="justify-content-md-center">
            <Col md={12}><hr/></Col>
            
            <Col md="auto">                
                <Input placeholder="Busca aqui" onChange={handleSearch} type="text" allowClear value={searchText}/>                                
            </Col>                        
            <Col md="auto" >
                <Button type='primary' onClick={globaSearch}>Buscar</Button>
            </Col>
            <Col md="auto" >
                <Button type='primary' onClick={showModal}>Nuevo elemento</Button>
            </Col>

            <Col md={12}>
                <hr/>
                <Table dataSource={gridData} columns={columns} loading={loading}
                expandable={{
                    expandedRowRender:(record)=>{return(<>
                        <p>Vim: {record.vim}</p>
                        <p>numero economico: {record["numero economico"]}</p>
                        <p>asientos: {record.asientos}</p>
                        <p>seguro: {record.seguro}</p>
                        <p>segure number: {record["segure numebr"]}</p>
                        </>
                    )}
                }} />
            </Col>
            <Modal title="Agregar Datos" open={isModalOpen} footer={[
                       
                    ]}>
                <Form
                        {...layout}
                        form={form}
                        name="newData"
                        onFinish={onFinish}
                        style={{
                            maxWidth: 600,
                        }}
                        >
                    
                        <Form.Item
                            name="placa"
                            label="Placa"
                            rules={[
                            {
                                required: true,
                            },
                            ]}
                        >
                        <Input />
                        </Form.Item>

                        <Form.Item
                            name="numero economico"
                            label="Numero economico"
                            rules={[
                            {
                                required: true,
                            },
                            ]}
                        >
                        <InputNumber min={1} />
                        </Form.Item>

                        <Form.Item
                            name="vim"
                            label="Vim"
                            rules={[
                            {            
                                required: true,
                            },
                            ]}
                        >
                        <Input />
                        </Form.Item>

                        <Form.Item
                            name="asientos"
                            label="Asientos"
                            rules={[
                            {                        
                                required: true,
                            },
                            ]}
                        >
                        <InputNumber min={2} max={40}  />
                        </Form.Item>

                        <Form.Item
                            name="seguro"
                            label="Seguro"
                            rules={[
                            {            
                                required: true,
                            },
                            ]}
                        >
                        <Input />
                        </Form.Item>

                        <Form.Item
                            name="segure numebr"
                            label="Segure number"
                            rules={[
                            {            
                                required: true,
                            },
                            ]}
                        >
                        <InputNumber min={1} />
                        </Form.Item>

                        <Form.Item
                            name="BRAND"
                            label="Brand"
                            rules={[
                            {            
                                required: true,
                            },
                            ]}
                        >
                        <Input />
                        </Form.Item>

                        <Form.Item
                            name="MODEL"
                            label="Model"
                            rules={[
                            {            
                                required: true,
                            },
                            ]}
                        >
                        <Input />
                        </Form.Item>

                        <Form.Item
                            name="YEAR"
                            label="Year"
                            rules={[
                            {            
                                required: true,
                            },
                            ]}
                        >
                        <InputNumber min={1900} max={2025} />
                        </Form.Item>
                        
                        
                        <Form.Item
                            name="COLOR"
                            label="Color"
                            rules={[
                            {            
                                required: true,
                            },
                            ]}
                        >
                        <Input />
                        </Form.Item>

                        <Form.Item
                            name="TYPE"
                            label="Type"
                            rules={[
                            {
                                required: true,
                            },
                            ]}
                        >
                            <Select
                            placeholder="Selecciona una opcion"
                            //onChange={onGenderChange}
                            allowClear
                            >
                                <Option value="Van">Van</Option>
                                <Option value="Truck">Truck</Option>
                                <Option value="Bus">Bus</Option>
                                <Option value="Trailer">Trailer</Option>
                                <Option value="SUV">SUV</Option>
                            </Select>
                        </Form.Item>

                        
                        <Form.Item
                            name="STATUS"
                            label="Status"
                            rules={[
                            {
                                required: true,
                            },
                            ]}
                        >
                            <Select
                            placeholder="Selecciona una opcion"
                            //onChange={onGenderChange}
                            allowClear
                            >
                                <Option value="Ready">Ready</Option>
                                <Option value="Hold">Hold</Option>
                                <Option value="Out">Out</Option>                                
                            </Select>
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                offset: 16,
                                span: 16,
                            }}
                            >
                            <Space>
                            <Button type="default" onClick={handleCancel}  loading={loading}>
                                    Cancelar
                                </Button>
                                <Button type="primary" htmlType="submit" loading={loading}>
                                    Enviar
                                </Button>
                                
                            </Space>
                        </Form.Item>                                                
                    </Form>
            </Modal>
        </Row> 
               
    )
}

export default VehicleTable