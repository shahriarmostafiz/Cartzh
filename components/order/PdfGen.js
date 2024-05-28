"use client"
import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        padding: 20,
    },
    section: {
        marginBottom: 10,
        padding: 10,
        borderBottom: '1px solid #eee',
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
    header: {
        fontSize: 18,
        marginBottom: 10,
    },
    text: {
        fontSize: 12,
        marginBottom: 5,
    },
    orderItem: {
        marginBottom: 5,
    }
});

// Create Document Component
const MyDocument = ({ data }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.title}>Order Summary</Text>
                <Text style={styles.header}>Customer Information</Text>
                <Text style={styles.text}>Name: {data.name}</Text>
                <Text style={styles.text}>Email: {data.email}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.header}>Shipping Address</Text>
                <Text style={styles.text}>{data.shippingAddress.address}</Text>
                <Text style={styles.text}>{data.shippingAddress.city}, {data.shippingAddress.region}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.header}>Billing Address</Text>
                <Text style={styles.text}>{data.billingAddress.address}</Text>
                <Text style={styles.text}>{data.billingAddress.city}, {data.billingAddress.region}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.header}>Order Items</Text>
                {data.orderSummery.map((item, index) => (
                    <Text style={styles.orderItem} key={index}>{item}</Text>
                ))}
            </View>

            <View style={styles.section}>
                <Text style={styles.header}>Order Details</Text>
                <Text style={styles.text}>Order ID: {data.id}</Text>
                <Text style={styles.text}>Total Cost: ${data.cost}</Text>
                <Text style={styles.text}>Created At: {new Date(data.createdAt).toLocaleString()}</Text>
                <Text style={styles.text}>Estimated Delivery: Withing 2-3 working days</Text>
            </View>
        </Page>
    </Document>
);

const PdfGenerator = ({ data }) => {
    return (
        <div className="bg-primary rounded px-4 py-1 text-white w-fit">
            <PDFDownloadLink document={<MyDocument data={data} />} fileName={`Order-invoice-${data.id}.pdf`}>
                {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : 'Download  Invoice'
                }
            </PDFDownloadLink>
        </div>
    );
};

export default PdfGenerator;
