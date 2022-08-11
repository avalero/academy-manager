import { NextPage } from "next";
import { Layout } from "../../components";
import { sections } from "../../config";
import withApollo from "../../apollo/withApollo";

const MonitorsPage: NextPage = () => {
  return (
    <Layout childrenHeader={undefined} section={sections[0].title}>
      <h1>Test</h1>
    </Layout>
  );
};

export default withApollo(MonitorsPage, { requiresAccess: false });
