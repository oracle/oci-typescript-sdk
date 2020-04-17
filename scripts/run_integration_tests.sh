
echo 'ping jira.oci.oraclecorp.com'
ping jira.oci.oraclecorp.com -c 3

echo 'ping bitbucket.oci.oraclecorp.com'
ping bitbucket.oci.oraclecorp.com -c 3

mvn -f scripts/oci-testing-service-pom.xml exec:java &> ./oci-testing-service.log &

rc=$?
if [[ $rc -ne 0 ]] ; then
  echo 'Run OCI Testing Service Failed'; exit $rc
fi

sdk_testing_service_pid=$!
echo "SDK Testing Service PID:" $sdk_testing_service_pid

echo "Waiting for Testing Service to be up"
sleep 420

# Run integration Tests
tsc -p tsconfig.json && mocha -r ts-node/register integration-test/*.ts --timeout 999999 --color true

# Get status of last run job
rc=$?

# Kill OCI-testing-service
echo "Kill OCI Testing Service: " $sdk_testing_service_pid
kill -9 $sdk_testing_service_pid

if [[ $rc -ne 0 ]] ; then
  echo 'Typescript integration tests test failed'; exit $rc
fi






