import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Register fonts
Font.register({
  family: 'Helvetica',
  fonts: [
    { src: 'https://cdn.jsdelivr.net/npm/@canvas-fonts/helvetica@1.0.4/Helvetica.ttf' },
    { src: 'https://cdn.jsdelivr.net/npm/@canvas-fonts/helvetica@1.0.4/Helvetica-Bold.ttf', fontWeight: 'bold' },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.5,
    color: '#333',
  },
  header: {
    marginBottom: 20,
    borderBottom: 1,
    borderBottomColor: '#00d472',
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0a0c0f',
  },
  title: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  contact: {
    marginTop: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    color: '#888',
  },
  section: {
    marginTop: 15,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#00d472',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 5,
    borderBottom: 0.5,
    borderBottomColor: '#eee',
    paddingBottom: 2,
  },
  expItem: {
    marginBottom: 10,
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: 'bold',
  },
  expRole: {
    fontStyle: 'italic',
    color: '#555',
  },
  bullet: {
    marginLeft: 10,
    marginTop: 2,
    flexDirection: 'row',
  },
  bulletDot: {
    width: 10,
  },
  bulletContent: {
    flex: 1,
  },
  skillGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  skillTag: {
    backgroundColor: '#f0f0f0',
    padding: '2 6',
    borderRadius: 3,
    fontSize: 9,
  },
});

const ResumePDF = () => (
  <Document title="Sagnik Das - Resume">
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Sagnik Das</Text>
        <Text style={styles.title}>QA Automation Engineer & Full-Stack Developer</Text>
        <View style={styles.contact}>
          <Text>Bangalore, India</Text>
          <Text>• mailsagnikdas53@gmail.com</Text>
          <Text>• +91 98314 71766</Text>
          <Text>• linkedin.com/in/sagnik-das-p53</Text>
          <Text>• github.com/sagniKdas53</Text>
        </View>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Summary</Text>
        <Text>
          Over 4 years of experience designing scalable test frameworks and shipping production software. 
          Expertise in automated testing suites, CI/CD pipelines, and full-stack web development. 
          AWS Certified AI Practitioner and Linux enthusiast.
        </Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        
        <View style={styles.expItem}>
          <View style={styles.expHeader}>
            <Text style={{fontWeight: 'bold'}}>Mphasis Limited</Text>
            <Text>Feb 2026 – Jun 2026</Text>
          </View>
          <Text style={styles.expRole}>QA Automation Engineer · Bangalore, KA</Text>
          <View style={styles.bullet}>
            <Text style={styles.bulletDot}>•</Text>
            <Text style={styles.bulletContent}>Served as a domain expert on the automation team, building and scaling complex test solutions alongside senior engineers.</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletDot}>•</Text>
            <Text style={styles.bulletContent}>Spearheaded a pilot to adopt MCP-based test management tooling, migrating codebase from JS to TypeScript on Deno.</Text>
          </View>
        </View>

        <View style={styles.expItem}>
          <View style={styles.expHeader}>
            <Text style={{fontWeight: 'bold'}}>Wipro Technologies</Text>
            <Text>May 2022 – Feb 2026</Text>
          </View>
          <Text style={styles.expRole}>Project Engineer · Bangalore, KA</Text>
          <View style={styles.bullet}>
            <Text style={styles.bulletDot}>•</Text>
            <Text style={styles.bulletContent}>Redesigned legacy automation framework end-to-end, introducing BDD-first Cucumber suites.</Text>
          </View>
          <View style={styles.bullet}>
            <Text style={styles.bulletDot}>•</Text>
            <Text style={styles.bulletContent}>Built REST-Assured API test suites and ran JMeter performance campaigns to identify production bottlenecks.</Text>
          </View>
        </View>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillGrid}>
          {['Cucumber BDD', 'JUnit', 'REST-Assured', 'Selenium', 'Postman', 'JMeter', 'Java', 'Python', 'TypeScript', 'JavaScript', 'React', 'Node.js', 'Deno', 'Spring Boot', 'PostgreSQL', 'Docker', 'GitHub Actions', 'Jenkins', 'AWS', 'Linux'].map((skill, i) => (
            <Text key={i} style={styles.skillTag}>{skill}</Text>
          ))}
        </View>
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Projects</Text>
        <View style={styles.expItem}>
          <Text style={{fontWeight: 'bold'}}>yt-diff (Personal)</Text>
          <Text>Self-hosted video archival platform built on Deno/TypeScript with React UI. Features real-time progress via WebSockets and automated archival via cron.</Text>
        </View>
        <View style={styles.expItem}>
          <Text style={{fontWeight: 'bold'}}>scheduler_bot (Personal)</Text>
          <Text>Discord bot for scraping and displaying streaming schedules. Built with Python and BeautifulSoup.</Text>
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <View style={styles.expHeader}>
          <Text style={{fontWeight: 'bold'}}>B.Tech in Electrical Engineering</Text>
          <Text>2018 – 2022</Text>
        </View>
        <Text>Maulana Abul Kalam Azad University of Technology · GPA 3.09 / 4.00</Text>
        <Text style={{fontStyle: 'italic'}}>Honours in Machine Learning & AI</Text>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;
