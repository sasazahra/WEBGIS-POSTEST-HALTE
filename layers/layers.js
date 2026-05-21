var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Buffered400_1 = new ol.format.GeoJSON();
var features_Buffered400_1 = format_Buffered400_1.readFeatures(json_Buffered400_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered400_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered400_1.addFeatures(features_Buffered400_1);
var lyr_Buffered400_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered400_1, 
                style: style_Buffered400_1,
                popuplayertitle: 'Buffered 400',
                interactive: true,
                title: '<img src="styles/legend/Buffered400_1.png" /> Buffered 400'
            });
var format_Servicearealines400_2 = new ol.format.GeoJSON();
var features_Servicearealines400_2 = format_Servicearealines400_2.readFeatures(json_Servicearealines400_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearealines400_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearealines400_2.addFeatures(features_Servicearealines400_2);
var lyr_Servicearealines400_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servicearealines400_2, 
                style: style_Servicearealines400_2,
                popuplayertitle: 'Service area (lines) 400',
                interactive: true,
                title: '<img src="styles/legend/Servicearealines400_2.png" /> Service area (lines) 400'
            });
var format_SnappedlinesJALAN_3 = new ol.format.GeoJSON();
var features_SnappedlinesJALAN_3 = format_SnappedlinesJALAN_3.readFeatures(json_SnappedlinesJALAN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SnappedlinesJALAN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SnappedlinesJALAN_3.addFeatures(features_SnappedlinesJALAN_3);
var lyr_SnappedlinesJALAN_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SnappedlinesJALAN_3, 
                style: style_SnappedlinesJALAN_3,
                popuplayertitle: 'Snapped lines JALAN',
                interactive: true,
                title: '<img src="styles/legend/SnappedlinesJALAN_3.png" /> Snapped lines JALAN'
            });
var format_Fixedgeometries_4 = new ol.format.GeoJSON();
var features_Fixedgeometries_4 = format_Fixedgeometries_4.readFeatures(json_Fixedgeometries_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fixedgeometries_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fixedgeometries_4.addFeatures(features_Fixedgeometries_4);
var lyr_Fixedgeometries_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fixedgeometries_4, 
                style: style_Fixedgeometries_4,
                popuplayertitle: 'Fixed geometries',
                interactive: true,
                title: '<img src="styles/legend/Fixedgeometries_4.png" /> Fixed geometries'
            });
var format_PersebaranHalte_5 = new ol.format.GeoJSON();
var features_PersebaranHalte_5 = format_PersebaranHalte_5.readFeatures(json_PersebaranHalte_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PersebaranHalte_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PersebaranHalte_5.addFeatures(features_PersebaranHalte_5);
var lyr_PersebaranHalte_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PersebaranHalte_5, 
                style: style_PersebaranHalte_5,
                popuplayertitle: 'Persebaran Halte',
                interactive: true,
    title: 'Persebaran Halte<br />\
    <img src="styles/legend/PersebaranHalte_5_0.png" /> Halte Balai Kota<br />\
    <img src="styles/legend/PersebaranHalte_5_1.png" /> Halte Bambu Runcing<br />\
    <img src="styles/legend/PersebaranHalte_5_2.png" /> Halte Basra<br />\
    <img src="styles/legend/PersebaranHalte_5_3.png" /> Halte Cak Durasim A<br />\
    <img src="styles/legend/PersebaranHalte_5_4.png" /> Halte Cak Durasim B<br />\
    <img src="styles/legend/PersebaranHalte_5_5.png" /> Halte Embong Kemiri<br />\
    <img src="styles/legend/PersebaranHalte_5_6.png" /> Halte Embong Malang<br />\
    <img src="styles/legend/PersebaranHalte_5_7.png" /> Halte Embong Malang 2<br />\
    <img src="styles/legend/PersebaranHalte_5_8.png" /> Halte Embong Wungu<br />\
    <img src="styles/legend/PersebaranHalte_5_9.png" /> Halte Genteng Kali A<br />\
    <img src="styles/legend/PersebaranHalte_5_10.png" /> Halte Genteng Kali B<br />\
    <img src="styles/legend/PersebaranHalte_5_11.png" /> Halte Gondosuli<br />\
    <img src="styles/legend/PersebaranHalte_5_12.png" /> Halte Grand City<br />\
    <img src="styles/legend/PersebaranHalte_5_13.png" /> Halte Gubernur Suryo<br />\
    <img src="styles/legend/PersebaranHalte_5_14.png" /> Halte Jaksa Agung Suprapto<br />\
    <img src="styles/legend/PersebaranHalte_5_15.png" /> Halte Jimerto<br />\
    <img src="styles/legend/PersebaranHalte_5_16.png" /> Halte Kaliasin<br />\
    <img src="styles/legend/PersebaranHalte_5_17.png" /> Halte Kantor Dinas Pendidikan<br />\
    <img src="styles/legend/PersebaranHalte_5_18.png" /> Halte Kayoon 1A<br />\
    <img src="styles/legend/PersebaranHalte_5_19.png" /> Halte Kayoon 1B<br />\
    <img src="styles/legend/PersebaranHalte_5_20.png" /> Halte Kayoon 2A<br />\
    <img src="styles/legend/PersebaranHalte_5_21.png" /> Halte Kayoon 2B<br />\
    <img src="styles/legend/PersebaranHalte_5_22.png" /> Halte Ketabang Ngemplak<br />\
    <img src="styles/legend/PersebaranHalte_5_23.png" /> Halte MMPA SIOLA A<br />\
    <img src="styles/legend/PersebaranHalte_5_24.png" /> Halte Monkasel<br />\
    <img src="styles/legend/PersebaranHalte_5_25.png" /> Halte Monumen Sudirman<br />\
    <img src="styles/legend/PersebaranHalte_5_26.png" /> Halte MPP SIOLA B<br />\
    <img src="styles/legend/PersebaranHalte_5_27.png" /> Halte Ngemplak<br />\
    <img src="styles/legend/PersebaranHalte_5_28.png" /> Halte Pangsud<br />\
    <img src="styles/legend/PersebaranHalte_5_29.png" /> Halte Pemuda<br />\
    <img src="styles/legend/PersebaranHalte_5_30.png" /> Halte PMI<br />\
    <img src="styles/legend/PersebaranHalte_5_31.png" /> Halte Simpang Dukuh<br />\
    <img src="styles/legend/PersebaranHalte_5_32.png" /> Halte Sindoro<br />\
    <img src="styles/legend/PersebaranHalte_5_33.png" /> Halte SIOLA<br />\
    <img src="styles/legend/PersebaranHalte_5_34.png" /> Halte Slamet<br />\
    <img src="styles/legend/PersebaranHalte_5_35.png" /> Halte SMPN 3<br />\
    <img src="styles/legend/PersebaranHalte_5_36.png" /> Halte Sono Kembang<br />\
    <img src="styles/legend/PersebaranHalte_5_37.png" /> Halte Sono Kembang 2<br />\
    <img src="styles/legend/PersebaranHalte_5_38.png" /> Halte Taman Apsari<br />\
    <img src="styles/legend/PersebaranHalte_5_39.png" /> Halte Taman Prestasi<br />\
    <img src="styles/legend/PersebaranHalte_5_40.png" /> Halte Tunjungan<br />\
    <img src="styles/legend/PersebaranHalte_5_41.png" /> Halte Urip Sumoharjo 1<br />\
    <img src="styles/legend/PersebaranHalte_5_42.png" /> Halte Wuni<br />\
    <img src="styles/legend/PersebaranHalte_5_43.png" /> Halte Yos Sudarso<br />' });

lyr_Positron_0.setVisible(true);lyr_Buffered400_1.setVisible(true);lyr_Servicearealines400_2.setVisible(true);lyr_SnappedlinesJALAN_3.setVisible(true);lyr_Fixedgeometries_4.setVisible(true);lyr_PersebaranHalte_5.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Buffered400_1,lyr_Servicearealines400_2,lyr_SnappedlinesJALAN_3,lyr_Fixedgeometries_4,lyr_PersebaranHalte_5];
lyr_Buffered400_1.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', });
lyr_Servicearealines400_2.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', });
lyr_SnappedlinesJALAN_3.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'bridge': 'bridge', 'tunnel': 'tunnel', 'width': 'width', 'highway': 'highway', 'surface': 'surface', 'railway': 'railway', 'layer': 'layer', 'oneway': 'oneway', 'name': 'name', 'smoothness': 'smoothness', });
lyr_Fixedgeometries_4.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'bridge': 'bridge', 'tunnel': 'tunnel', 'width': 'width', 'highway': 'highway', 'surface': 'surface', 'railway': 'railway', 'layer': 'layer', 'oneway': 'oneway', 'name': 'name', 'smoothness': 'smoothness', });
lyr_PersebaranHalte_5.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Informasi Halte__Nama_Halte': 'Informasi Halte__Nama_Halte', 'Informasi Halte__RUTE': 'Informasi Halte__RUTE', 'Informasi Halte__Destinasi': 'Informasi Halte__Destinasi', });
lyr_Buffered400_1.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_Servicearealines400_2.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_SnappedlinesJALAN_3.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'width': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'railway': 'TextEdit', 'layer': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'smoothness': 'TextEdit', });
lyr_Fixedgeometries_4.set('fieldImages', {'fid': '', 'osm_id': '', 'bridge': '', 'tunnel': '', 'width': '', 'highway': '', 'surface': '', 'railway': '', 'layer': '', 'oneway': '', 'name': '', 'smoothness': '', });
lyr_PersebaranHalte_5.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'Informasi Halte__Nama_Halte': 'TextEdit', 'Informasi Halte__RUTE': 'TextEdit', 'Informasi Halte__Destinasi': 'TextEdit', });
lyr_Buffered400_1.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_Servicearealines400_2.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_SnappedlinesJALAN_3.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'width': 'no label', 'highway': 'no label', 'surface': 'no label', 'railway': 'no label', 'layer': 'no label', 'oneway': 'no label', 'name': 'no label', 'smoothness': 'no label', });
lyr_Fixedgeometries_4.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'width': 'no label', 'highway': 'no label', 'surface': 'no label', 'railway': 'no label', 'layer': 'no label', 'oneway': 'no label', 'name': 'no label', 'smoothness': 'no label', });
lyr_PersebaranHalte_5.set('fieldLabels', {'Nama_Halte': 'header label - always visible', 'Keterangan': 'no label', 'Sumber': 'inline label - always visible', 'Informasi Halte__Nama_Halte': 'inline label - always visible', 'Informasi Halte__RUTE': 'inline label - always visible', 'Informasi Halte__Destinasi': 'inline label - always visible', });
lyr_PersebaranHalte_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});